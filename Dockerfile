FROM node:8.5.0-alpine

RUN apk update && apk upgrade && apk add bash

WORKDIR /var/www/app
