FROM node:alpine3.20
WORKDIR /app
COPY package.json .
RUN npm install && npm install -g http-server
COPY . .
EXPOSE 8080
CMD ["http-server", ".", "-p", "8080"]