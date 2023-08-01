# 确保脚本抛出遇到的错误
set -e

npm i

npm run build

docker build -t coderlhd-blog .