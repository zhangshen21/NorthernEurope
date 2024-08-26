## git配置
git config --global user.name "your_name" \
git config --global user.email "your_email@example.com"

## git操作
git生成密钥 \
ssh-keygen -t   rsa -C "your_email@example.com" \
git添加至暂存区 \
git add .\
git提交\
git commit -m "commit message"\
git添加远程仓库\
git remote add origin git@github.com:your_name/your_project.git \
git提交至远程仓库\
git push origin master 


