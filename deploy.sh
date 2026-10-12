#!/bin/bash

set -e

cd /Users/wiktorbuksza/Dropbox/www.buksha.design || exit 1

echo "📦 Проверка изменений..."
git add .

if git diff --cached --quiet; then
    echo "ℹ️ Нет новых изменений для деплоя."
    exit 0
fi

MSG="${1:-Update website}"
echo "📝 Создание коммита: '$MSG'..."
git commit -m "$MSG"

echo "🚀 Отправка на GitHub..."
git push origin main

echo "✅ Готово! Сайт собирается и публикуется на https://www.buksha.design"
