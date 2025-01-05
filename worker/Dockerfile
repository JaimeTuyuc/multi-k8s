FROM node:14.14.0-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# Production build
# RUN npm run build

CMD ["npm", "run", "start"]