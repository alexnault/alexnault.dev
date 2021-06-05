FROM node:14.17.0-alpine as base
RUN apk add --no-cache g++ make python
WORKDIR /app
EXPOSE 3000
COPY package*.json .

FROM base as dev
RUN npm i
COPY . .
CMD ["npm", "run", "dev"]
