FROM node:18.19-alpine as build-step
RUN mkdir p app
WORKDIR /app
COPY WebAppControlCitas/package.json /app
RUN npm install 
COPY WebAppControlCitas/. /app
RUN npm run  build --prod --omit=dev

FROM nginx:1.17.1-alpine
COPY --from=build-step app/dist/controlcitasmedicas /usr/share/nginx/html