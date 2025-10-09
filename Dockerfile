FROM node:20-alpine as base 


WORKDIR /usr/src/app

FROM base as build

COPY package*.json ./


RUN npm install --production


COPY . .

RUN npm run build

FROM base 

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json


EXPOSE 4181


CMD ["npm", "start"]