# FROM node:16.17 as blog-stage

# WORKDIR /blog

# COPY ./package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

FROM nginx:latest

COPY ./dist /blog
# COPY --from=blog-stage /blog/dist /blog
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]