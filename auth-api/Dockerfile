# 使用するPythonのベースイメージを指定
FROM python:3.9

# 環境変数を設定（Pythonがpycファイルと標準出力のバッファリングを行わないようにする）
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# ワーキングディレクトリを設定
WORKDIR /app

# 必要なPythonパッケージをインストール
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのコードをコピー
COPY . /app/

# コンテナのポート8000を外部に公開
EXPOSE 8000

# マイグレーションを実行し、Django開発サーバーを起動
CMD python manage.py migrate && python manage.py runserver 0.0.0.0:8000