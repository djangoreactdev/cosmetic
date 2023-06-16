FROM node:18-alpine AS base

RUN apk add --no-cache libc6-compat
RUN  npm install -g pnpm

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

COPY package.json pnpm-lock.yaml ./
RUN  pnpm install

COPY . ${APP_HOME}

EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "dev"]