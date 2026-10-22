#!/usr/bin/env bash
set -e

EXPORT_DIR="/Users/wiktorbuksza/Library/CloudStorage/Dropbox/!!!New Notus with Kerning/Export Notus/Notus/OpenType-PS"
SITE_DIR="/Users/wiktorbuksza/Dropbox/www.buksha.design"
TARGET_FONTS_DIR="$SITE_DIR/notus"

# Ensure dirs exist
if [ ! -d "$EXPORT_DIR" ]; then
  # Fallback to direct Dropbox path if CloudStorage path differs
  EXPORT_DIR="/Users/wiktorbuksza/Dropbox/!!!New Notus with Kerning/Export Notus/Notus/OpenType-PS"
fi

if [ ! -d "$EXPORT_DIR" ]; then
  echo "Export directory not found: $EXPORT_DIR"
  exit 1
fi

TIMESTAMP=$(date +%s)
UPDATED=0

# Mapping:
# Pattern in export dir -> Target filename in site/notus/
# 1. Notus-Display-Thin-Italic-v8.otf -> Notus-Display Italic.otf
# 2. NotusDisplay - New kern v3.otf   -> Notus-Display.otf

sync_font() {
  local src_pattern="$1"
  local target_name="$2"
  local target_path="$TARGET_FONTS_DIR/$target_name"

  # Find newest file matching pattern (ignoring backup files with timestamp suffix if non-timestamped exists)
  local newest_file=""
  if [ -f "$EXPORT_DIR/$src_pattern" ]; then
    newest_file="$EXPORT_DIR/$src_pattern"
  else
    newest_file=$(ls -t "$EXPORT_DIR"/$src_pattern 2>/dev/null | head -n 1)
  fi

  if [ -z "$newest_file" ] || [ ! -f "$newest_file" ]; then
    echo "No font file found matching: $src_pattern"
    return
  fi

  local src_md5=$(md5 -q "$newest_file" 2>/dev/null || md5sum "$newest_file" | awk '{print $1}')
  local dst_md5=""
  if [ -f "$target_path" ]; then
    dst_md5=$(md5 -q "$target_path" 2>/dev/null || md5sum "$target_path" | awk '{print $1}')
  fi

  if [ "$src_md5" != "$dst_md5" ]; then
    echo "Updating $target_name from $(basename "$newest_file")..."
    cp "$newest_file" "$target_path"
    UPDATED=1

    # Update cache-busting version in css files
    perl -pi -e "s#(notus/\Q$target_name\E\?v=)[0-9]+#\${1}$TIMESTAMP#g" "$SITE_DIR/notus.css" "$SITE_DIR/style.css"
  else
    echo "$target_name is already up to date ($(basename "$newest_file"))."
  fi
}

sync_font "Notus-Display-Thin-Italic-v8.otf" "Notus-Display Italic.otf"
sync_font "NotusDisplay - New kern v3.otf" "Notus-Display.otf"

if [ "$UPDATED" -eq 1 ]; then
  echo "Fonts updated locally."
  if [ "$1" = "--deploy" ] || [ "$1" = "-d" ]; then
    echo "Deploying to GitHub..."
    cd "$SITE_DIR"
    git add "notus/" notus.css style.css
    git commit -m "Auto-sync updated Notus fonts ($TIMESTAMP)"
    git push origin main
    echo "Deployed successfully!"
  else
    echo "To deploy to website, run with --deploy"
  fi
else
  echo "No changes detected. Everything is up to date."
fi
