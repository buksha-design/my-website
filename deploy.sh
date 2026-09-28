#!/bin/bash

cd /Users/wiktorbuksza/Dropbox/www.buksha.design || exit 1

git add .

if git diff --cached --quiet; then
    echo "Nothing to deploy."
    exit 0
fi

git commit -m "Update website"

git push

