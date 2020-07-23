FROM node:12.18.2-stretch
WORKDIR /app
# Depenedencies/library
COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@latest
# COPY All files
COPY . .
EXPOSE 9999
CMD [ "ng", "serve","--host","0.0.0.0" ]