FROM node

RUN mkdir -p /usr/nodejs

WORKDIR /usr/nodejs

COPY . ./

RUN npm install

EXPOSE 3000

CMD ["node", "src/app.js"]

