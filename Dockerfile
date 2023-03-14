FROM node:19-alpine
WORKDIR /home/app/frontend

RUN apk update \
    && apk add git