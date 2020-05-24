FROM node:latest

WORKDIR /
COPY ./heroku.yml /heroku.yml
COPY ./Procfile /Procfile
COPY ./package.json /package.json
COPY ./package-lock.json /package-lock.json

COPY ./src /src

RUN npm install -g npm
RUN npm install

VOLUME /node_modules
