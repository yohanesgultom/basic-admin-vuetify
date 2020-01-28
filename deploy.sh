#!/bin/sh

# build then push to github page

npm run build &&
git add dist &&
git commit -m "update dist subtree" &&
git subtree push --prefix dist origin gh-pages
