FROM node:8.5.0-alpine

WORKDIR /var/www/app
COPY package.json /var/www/app
RUN npm install