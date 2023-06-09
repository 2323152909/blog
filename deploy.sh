#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf dist

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# deploy to github pages
# echo 'b.xugaoyi.com' > CNAME

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:2323152909/blog.git master:gh-pages # 推送到github gh-pages分支

cd -
rm -rf dist
