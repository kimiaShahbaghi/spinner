FROM docker.mci.dev/node:14-alpine AS build
 
WORKDIR /app
 
COPY package*.json /app/
RUN npm install
 
COPY ./ /app/
RUN npm run build --no-cache
 
FROM docker.mci.dev/nginx:stable-alpine
 
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
 
EXPOSE 80
 
CMD ["nginx", "-g", "daemon off;"]