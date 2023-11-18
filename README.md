## 環境準備
- npm  
    [Macの場合](https://zenn.dev/uchitaka/articles/821f979139bdf9#%E5%B0%8E%E2%BC%8A%EF%BC%88mac%E3%81%AE%E5%A0%B4%E5%90%88%EF%BC%89)    
    [Windowsの場合](https://zenn.dev/uchitaka/articles/821f979139bdf9#%E5%B0%8E%E2%BC%8A%EF%BC%88windows%E3%81%AE%E5%A0%B4%E5%90%88%EF%BC%89)

- docker 
  * dockerhubのアカウント作成  
      https://hub.docker.com/ 
 
  * dockerのインストール  
     [Macの場合](https://zenn.dev/imasaka0909/articles/e984e9e69c43cf)  
     [Windowsの場合](https://www.kagoya.jp/howto/cloud/container/wsl2_docker/) 

 
## APIの起動 
sample-auth-project直下にいる状態で下記コマンドを実施
```
cd auth-api 
docker-compose up -d 
```

# front

## frontの起動 

sample-auth-project直下にいる状態で下記コマンドを実施 

```
cd front 
npm ci 
npm start 
```

## インストールしてるパッケージ

```
npm install axios      
npm install react-router-dom  
npm install --save-dev @types/react-router-dom
```



