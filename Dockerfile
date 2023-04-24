FROM node:20-alpine
WORKDIR /home/app/frontend

RUN apk update \
    && apk add git