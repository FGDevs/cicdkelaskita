# # 
# FROM node:16-alpine3.11

# # 
# ENV PORT 3000

# # 
# RUN mkdir -p /usr/src/app

# # 
# WORKDIR /usr/src/app

# # copy all folder & file on root
# COPY . /usr/src/app/

# # 
# COPY package*.json /usr/src/app/
# RUN npm install

# # 
# RUN npm run build
# EXPOSE 3000

# # d
# CMD "npm" "run" "dev"

FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package*.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN yarn install

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "dev" ]