FROM node:latest
WORKDIR ./app

COPY package.json ./
RUN npm install
COPY ./src .
EXPOSE 6000

CMD ["node", "server.mjs"]