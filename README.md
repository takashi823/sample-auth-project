## 環境準備
- npm 
- docker

### npmのインストール（参考）

### dockerのインストール（参考）
1. dockerhubのアカウント作成
    https://hub.docker.com/

2. dockerのインストール
（Macの場合）
https://zenn.dev/imasaka0909/articles/e984e9e69c43cf

（Windowsの場合）※ WSL2でインストールするやり方
https://www.kagoya.jp/howto/cloud/container/wsl2_docker/

## API起動
sample-auth-project直下にいる状態で下記コマンドを実施
```
cd auth-api
docker-compose up -d
```

## react起動
sample-auth-project直下にいる状態で下記コマンドを実施
```
cd front
npm ci
npm start
```
