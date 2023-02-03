FROM node:latest

USER root

RUN mkdir -p /home/node/app/node_modules && cd /home/node/app

WORKDIR /home/node/app

COPY package*.json /home/node/app/

COPY pnpm-lock.yaml /home/node/app/

COPY . /home/node/app/

RUN npm install -g pnpm next sass

RUN pnpm install

EXPOSE 3000


CMD [ "next", "start" ]
