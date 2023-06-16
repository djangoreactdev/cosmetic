FROM node:18-alpine AS base

RUN apk add --no-cache libc6-compat
RUN  npm install -g pnpm

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

COPY package.json pnpm-lock.yaml ./
RUN  pnpm install

COPY . ${APP_HOME}

EXPOSE 4000

ENV PORT 4000

CMD ["pnpm", "dev"]