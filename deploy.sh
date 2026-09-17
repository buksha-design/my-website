
#!/bin/bash

git add .

if git diff --cached --quiet; then
    echo "Nothing to deploy."
    exit 0
fi

git commit -m "Update website"
git push
