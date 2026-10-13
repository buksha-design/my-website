# Инструкция по восстановлению настроек сайта при переустановке системы

Этот документ описывает, как за 1 минуту восстановить все настройки публикации сайта **www.buksha.design** и гарнитуры **Notus** на чистой macOS.

---

## ⚡ Быстрое автоматическое восстановление (1 команда)

Если Dropbox уже подключен и папка `www.buksha.design` синхронизирована:

Откройте **Терминал** и выполните:
```bash
bash /Users/wiktorbuksza/Dropbox/www.buksha.design/restore_setup.sh
```

Скрипт автоматически:
1. Запишет глобальные настройки Git (`Wiktor Buksza`, `wiktor.buksza@gmail.com`).
2. Добавит команду `deploy` в `~/.zshrc`.
3. Подключит SSH ключ к GitHub.
4. Проверит файл `CNAME` и удаленный репозиторий GitHub.

После этого перезапустите Терминал (или введите `source ~/.zshrc`), и команда `deploy` снова будет работать из любого места!

---

## 🔑 Если нужно восстановить SSH ключ на новом Mac

Если система была полностью очищена и в папке `~/.ssh` нет ключа:

1. **Создайте ключ в терминале:**
   ```bash
   ssh-keygen -t ed25519 -C "wiktor.buksza@gmail.com"
   ```
   *(нажмите Enter на все вопросы о пароле)*

2. **Скопируйте публичный ключ:**
   ```bash
   pbcopy < ~/.ssh/id_ed25519.pub
   ```

3. **Вставьте его на GitHub:**
   - Перейдите в [GitHub Settings → SSH and GPG keys](https://github.com/settings/keys).
   - Нажмите **New SSH key**, вставьте скопированный ключ и сохраните.

4. **Запустите скрипт восстановления:**
   ```bash
   bash /Users/wiktorbuksza/Dropbox/www.buksha.design/restore_setup.sh
   ```

---

## 📦 Что хранится в репозитории сайта:
* **Путь к сайту на Mac:** `/Users/wiktorbuksza/Dropbox/www.buksha.design`
* **Репозиторий на GitHub:** `git@github.com:buksha-design/my-website.git`
* **Домен:** `https://www.buksha.design` (файл `CNAME` в корне сайта)
* **Скрипт деплоя:** `/Users/wiktorbuksza/Dropbox/www.buksha.design/deploy.sh`
* **Скрипт восстановления:** `/Users/wiktorbuksza/Dropbox/www.buksha.design/restore_setup.sh`

---

## 🚀 Как работает публикация изменений:
В любой момент в терминале достаточно написать:
```bash
deploy "Описание изменений"
```
Сайт автоматически закоммитится, отправится на GitHub и обновится в сети по адресу **https://www.buksha.design**.
