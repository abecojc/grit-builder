FROM node:latest
WORKDIR ./app

COPY package*.json ./
RUN npm install
COPY . /app
#EXPOSE 8080
ENV NODE_ENV=production
CMD ["npm", "server"]