# STAGE 0 - Build
FROM node:16.17.1-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN cd src/app/api/gen/api/ && sed -i -- 's/http:\/\/localhost:8080/https:\/\/core.windirsch.ch/g' *.service.ts && cd ../../../../..
RUN npm run build

# STAGE 1 - Run
FROM nginx:1.23.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/hawkframe /usr/share/nginx/html
EXPOSE 80
