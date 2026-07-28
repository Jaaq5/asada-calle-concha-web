# 1. Build
FROM docker.io/node:22 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. Runner (MUCHO más limpio)
FROM docker.io/node:22 AS runner
WORKDIR /app

ENV NODE_ENV=production

# copiar standalone
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]