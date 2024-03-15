FROM node:lts-alpine

WORKDIR /app

COPY . /app

EXPOSE 8000

CMD [ "node", "index.js"]