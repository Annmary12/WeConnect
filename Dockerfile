FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 8200
CMD node_modules/.bin/babel-node app.js