# wave-website 部署

## 环境要求

- node: 16.2.0
- yarn: 1.22.5
- npm: 7.13.0

### 部署依赖 pm2, 安装 pm2

```
npm install -g pm2
```

### 首次部署指令

```
git clone git@gitlab.weinvent.org:forcewallet/business/forcewallet.org.git
cd forcewallet.org
yarn
yarn build
pm2 start npm --name "forcewallet-website" -- start
```

### 更新部署:

```shell
git pull
yarn
yarn build
pm2 restart forcewallet-website
```

### 如需更新启动端口，

修改 `package.json` 中 `next start --p $PORT`

### nginx 配置:

```
server {
    server_name forcewallet.org;
    access_log    /var/log/nginx/forcewallet.org.log;
    location / {
        proxy_pass http://127.0.0.1:3001;
    }
}
```
