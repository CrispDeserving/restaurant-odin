#!/bin/sh
set -e
site_dir="dist"

npm run build
git subtree push --prefix $site_dir origin gh-pages
