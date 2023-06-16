FROM node:18-alpine AS base

RUN apk add --no-cache libc6-compat
RUN  npm install -g pnpm

FROM base AS deps

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN  pnpm install

FROM base AS builder

WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

ENV NEXT_TELEMETRY_DISABLED 1

RUN pnpm build && pnpm prune --prod

FROM base AS deploy

WORKDIR /app

# ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

RUN chmod -R 755 /app && addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs 

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "start"]