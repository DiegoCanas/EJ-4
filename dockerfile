FROM node:lts-alpine

RUN apk add --no-cache mysql-client mariadb-dev gcc g++

WORKDIR /app

COPY . /app

EXPOSE 8000

CMD [ "node", "index.js"]