FROM node:alpine3.20
WORKDIR /app
COPY package.json .
RUN npm install && npm install -g http-server
COPY . .
ENV BASE_URL=http://192.168.200.102:3333
EXPOSE 8080
CMD ["http-server", ".", "-p", "8080"]