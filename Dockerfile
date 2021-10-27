FROM node:16.13.0-alpine as base
RUN apk add --no-cache g++ make
WORKDIR /app
EXPOSE 3000
COPY package*.json .

FROM base as dev
RUN npm i
COPY . .
CMD ["npm", "run", "dev"]
