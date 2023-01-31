FROM node:latest

USER root

RUN mkdir -p /home/node/app/node_modules && cd /home/node/app

WORKDIR /home/node/app

COPY package*.json /home/node/app/

RUN npm install -g next sass 

RUN npm install

RUN npm audit fix --force

EXPOSE 3000

CMD [ "next", "start" ]
