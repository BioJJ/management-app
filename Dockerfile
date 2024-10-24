# Stage 0: compile angular frontend
FROM node:16.19.0-alpine AS build
WORKDIR /app
RUN npm cache clean --force
COPY . . 
RUN npm install
RUN npm run build --prod 


# Stage 1: serve app with nginx server
FROM nginx:latest AS ngi
COPY --from=build /app/dist/app  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80