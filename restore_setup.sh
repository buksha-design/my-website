#!/bin/bash
# ==============================================================================
# WIKTOR BUKSZA WEBSITE & NOTUS SPECIMEN — RESTORATION SCRIPT
# Этот скрипт автоматически восстанавливает все настройки окружения на новом Mac:
# 1. Добавляет команду 'deploy' в ~/.zshrc
# 2. Настраивает глобальный Git (имя, почту, ветку по умолчанию)
# 3. Проверяет SSH ключ и подключение к GitHub
# 4. Проверяет привязку репозитория и CNAME
# ==============================================================================

set -e

REPO_DIR="/Users/wiktorbuksza/Dropbox/www.buksha.design"

echo "=================================================="
echo "🚀 Восстановление настроек для www.buksha.design"
echo "=================================================="

# 1. Проверка директории репозитория
if [ ! -d "$REPO_DIR" ]; then
    echo "⚠️ Директория $REPO_DIR не найдена."
    echo "Убедитесь, что Dropbox синхронизирован или репозиторий склонирован."
    exit 1
fi

cd "$REPO_DIR"

# 2. Настройка Git Config
echo ""
echo "⚙️ [1/4] Настройка Git..."
git config --global user.name "Wiktor Buksza"
git config --global user.email "wiktor.buksza@gmail.com"
git config --global init.defaultBranch main
git config --global credential.helper osxkeychain
echo "✅ Git сконфигурирован: Wiktor Buksza <wiktor.buksza@gmail.com>"

# 3. Настройка команды 'deploy' в ~/.zshrc
echo ""
echo "⚙️ [2/4] Проверка команды 'deploy' в ~/.zshrc..."
ZSHRC="$HOME/.zshrc"
touch "$ZSHRC"

if grep -q "deploy.sh" "$ZSHRC"; then
    echo "✅ Функция 'deploy' уже присутствует в $ZSHRC"
else
    echo "" >> "$ZSHRC"
    echo "# Deploy website to GitHub Pages" >> "$ZSHRC"
    echo "deploy() {" >> "$ZSHRC"
    echo "  bash $REPO_DIR/deploy.sh \"\$@\"" >> "$ZSHRC"
    echo "}" >> "$ZSHRC"
    echo "✅ Функция 'deploy' успешно добавлена в $ZSHRC"
fi

# 4. Проверка прав на deploy.sh
chmod +x "$REPO_DIR/deploy.sh"
echo "✅ Права на исполнение deploy.sh проверены (+x)"

# 5. Проверка SSH ключа GitHub
echo ""
echo "⚙️ [3/4] Проверка SSH ключа GitHub..."
if [ -f "$HOME/.ssh/id_ed25519" ]; then
    echo "🔑 Найден ключ ~/.ssh/id_ed25519"
    # Добавляем в ssh-agent
    eval "$(ssh-agent -s)" > /dev/null 2>&1 || true
    ssh-add --apple-use-keychain "$HOME/.ssh/id_ed25519" > /dev/null 2>&1 || ssh-add "$HOME/.ssh/id_ed25519" > /dev/null 2>&1 || true
    
    echo "Тестирование подключения к GitHub..."
    ssh -o StrictHostKeyChecking=accept-new -T git@github.com 2>&1 | grep -q "successfully authenticated" && echo "✅ Связь с GitHub по SSH работает отлично!" || echo "ℹ️ Проверьте, добавлен ли открытый ключ ~/.ssh/id_ed25519.pub в GitHub Settings -> SSH Keys."
else
    echo "⚠️ Ключ ~/.ssh/id_ed25519 не найден."
    echo "Для генерации нового ключа выполните:"
    echo "  ssh-keygen -t ed25519 -C 'wiktor.buksza@gmail.com'"
    echo "  pbcopy < ~/.ssh/id_ed25519.pub"
    echo "И вставьте его на https://github.com/settings/keys"
fi

# 6. Проверка удаленного репозитория и CNAME
echo ""
echo "⚙️ [4/4] Проверка CNAME и Remote Origin..."
if [ -f "$REPO_DIR/CNAME" ]; then
    echo "✅ CNAME присутствует: $(cat "$REPO_DIR/CNAME")"
else
    echo "www.buksha.design" > "$REPO_DIR/CNAME"
    echo "✅ Файл CNAME создан: www.buksha.design"
fi

REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")
if [ "$REMOTE_URL" = "git@github.com:buksha-design/my-website.git" ]; then
    echo "✅ Remote origin корректен: $REMOTE_URL"
else
    git remote set-url origin git@github.com:buksha-design/my-website.git 2>/dev/null || git remote add origin git@github.com:buksha-design/my-website.git
    echo "✅ Remote origin установлен на git@github.com:buksha-design/my-website.git"
fi

echo ""
echo "=================================================="
echo "🎉 ВСЕ НАСТРОЙКИ УСПЕШНО ВОССТАНОВЛЕНЫ!"
echo "Теперь вы можете использовать команду 'deploy' из любой папки в терминале."
echo "=================================================="
