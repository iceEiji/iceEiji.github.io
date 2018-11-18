git checkout source
hugo
git add .
git commit -m "run "hugo" command."
git push origin source
git subtree push --prefix docs/ origin master
