FROM node:18-alpine as builder

WORKDIR /app

# this here because so its cached
COPY package.json pnpm-lock.yaml .

RUN npm i -g pnpm

RUN pnpm install

# no need docker compose actually if prod, because just want to build
COPY . .

RUN pnpm build

FROM nginx:alpine AS runtime

# to tell elastic beanstalk to use this port
EXPOSE 80

# commented nginx config, because we are using the default one
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html
