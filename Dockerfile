FROM node:18-alpine
WORKDIR /home/app/frontend

RUN apk update \
    && apk add git