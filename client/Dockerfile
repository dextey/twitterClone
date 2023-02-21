FROM node:alpine

WORKDIR /home/usr

COPY ./package.json  ./
RUN npm install
COPY ./ ./

CMD [ "npm","start" ]