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
yarn
yarn build
pm2 start npm --name "evt-protocol-website" -- start
```

### 更新部署:

```shell
git pull
yarn
yarn build
pm2 restart evt-protocol-website
```

### 如需更新启动端口，

修改 `package.json` 中 `next start --p $PORT`

### nginx 配置:

```
server {
    server_name {domin};
    access_log    /var/log/nginx/{domin}.log;
    location / {
        proxy_pass http://127.0.0.1:3000;
    }
}
```
