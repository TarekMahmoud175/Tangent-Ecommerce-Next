#!/bin/bash

if [ $# -eq 0 ]; then
  echo "there is no commit message"
  exit 0
fi

git add .

git commit -m "$1"

# change "main" with your branch name.
branch=main;

git pull origin $branch

git push origin $branch

clear

exit 0