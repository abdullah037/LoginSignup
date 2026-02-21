FROM node:22.17.1-slim

WORKDIR /app

COPY . .

EXPOSE 8000
RUN npm install -g serve
#ENTRYPOINT ["npx", "serve", "--listen", "80"]
ENTRYPOINT ["npx", "serve", "--listen", "8000"]
#ENTRYPOINT ["npx", "serve", "-s", ".", "--listen", "tcp://0.0.0.0:8000"]