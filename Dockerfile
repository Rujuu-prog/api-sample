FROM node:21-alpine
WORKDIR /home/app/frontend

RUN apk update \
    && apk add git