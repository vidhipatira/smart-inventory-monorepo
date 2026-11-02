# Stage 1: Build Angular app
FROM node:22 AS build

WORKDIR /app

# Copy everything from the build context (apps/frontend-angular-nx)
COPY . .

RUN npm install

RUN npx nx build frontend-angular-nx --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/frontend-angular-nx/browser /usr/share/nginx/html
