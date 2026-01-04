FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json .
RUN npm ci
COPY . .
RUN npm run build-storybook

FROM caddy:2-alpine
COPY --from=build /app/storybook-static /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
