# build stage
FROM node:14.7.0-stretch as build-stage
WORKDIR /app
COPY package*.json ./
COPY yarn*.lock ./
RUN yarn config set registry http://registry.npm.taobao.org/
RUN yarn
COPY . .
RUN yarn build

# nginx stage
FROM nginx:1.19-alpine
ENV PLUGINWORKPLACE = /usr/plugin_workplace
WORKDIR /
RUN rm -f my-plugin.zip
RUN apk add zip
RUN apk add vim
RUN mkdir /usr/plugin_workplace
COPY --from=build-stage /app/dist /usr/plugin_workplace
RUN cd /usr/plugin_workplace \
    && zip -r my-plugin.zip *\
    && cp /usr/plugin_workplace/my-plugin.zip /usr/share/nginx/html/my-plugin.zip
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


