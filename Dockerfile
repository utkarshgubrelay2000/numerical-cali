FROM node:16.0.0-buster

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm install -g typescript

RUN npm link typescript

RUN npm run build

CMD ["npm", "start"]
