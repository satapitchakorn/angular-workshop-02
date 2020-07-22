FROM node:12.18.2-stretch
WORKDIR /app
# Depenedencies/library
COPY package*.json ./

RUN npm install
# COPY All files
COPY . .
EXPOSE 4000
CMD [ "ng", "serve" ]