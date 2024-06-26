FROM --platform=linux/amd64 node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_NODE_ENV
ARG NEXT_PUBLIC_BASE_PATH
ARG NEXT_PUBLIC_ZERO_EX_CONTRACT_ADDRESS
ARG NEXT_PUBLIC_CONTRACT_ADDRESS
ARG NEXT_PUBLIC_CONTRACT_ADDRESS_SHIPS
ARG NEXT_PUBLIC_NETWORK_ID
ARG NEXT_PUBLIC_RPC_URL
ARG DATABASE_URL
ARG NEXT_PUBLIC_COMETH_MARKETPLACE_API_URL
ARG NEXT_PUBLIC_MARKETPLACE_API_KEY
ARG NEXT_PUBLIC_COMETH_MARKETPLACE_SHIPS_API_URL
ARG NEXT_PUBLIC_MARKETPLACE_SHIPS_API_KEY
ARG NEXT_PUBLIC_COMETH_CONNECT_BASE_URL
ARG NEXT_PUBLIC_COMETH_CONNECT_API_KEY
ARG NEXT_PUBLIC_COSMIK_BASE_URL
ARG NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID
ARG NEXT_PUBLIC_COINGECKO_API_KEY
ARG NEXT_PUBLIC_TRANSAK_API_KEY
ARG NEXT_PUBLIC_COMETH_ONRAMP_URI
ARG NEXT_PUBLIC_COMETH_ONRAMP_API_KEY
ARG NEXT_PUBLIC_BUGSNAG_API_KEY
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# RUN yarn prisma:generate
RUN yarn build

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_SHARP_PATH=/app/node_modules/sharp
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
