# Stage 1: Build Angular app
FROM node:22 AS build

WORKDIR /app

COPY apps/frontend-angular-nx/ .

RUN npm install

RUN npx nx build frontend-angular-nx --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/frontend-angular-nx/browser /usr/share/nginx/html
