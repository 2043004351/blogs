set -e
git checkout master
git remote -v
git remote set-url origin  http://git.lovedata.cn/tool/blogs.git
git add -A
git commit -m 'deploy'
git push 