FROM node:10

WORKDIR "/application"

ENV PATH /application/.bin:$PATH

COPY package.json /application/package.json
RUN npm install
