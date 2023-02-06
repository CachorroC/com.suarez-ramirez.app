FROM node:latest

RUN mkdir -p /home/node/app/node_modules && cd /home/node/app

WORKDIR /home/node/app

COPY package*.json /home/node/app/

COPY . /home/node/app/

RUN cd /home/node/app && npm install 

RUN npm run build

EXPOSE 3000
