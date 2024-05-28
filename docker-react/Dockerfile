FROM node:alpine AS builder

WORKDIR /usr/app

COPY package.json .
RUN npm i

COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /usr/app/dist /usr/share/nginx/html