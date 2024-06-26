import { MarketplaceSdk } from "@cometh/marketplace-sdk"
import axios from "axios"
import { setupCache } from "axios-cache-interceptor"

import { env } from "@/config/env"

export const comethMarketplaceClient = new MarketplaceSdk({
  BASE: env.NEXT_PUBLIC_COMETH_MARKETPLACE_API_URL,
  HEADERS: {
    apikey: env.NEXT_PUBLIC_MARKETPLACE_API_KEY,
  },
})

export const comethMarketplaceSpaceshipsClient = new MarketplaceSdk({
  BASE: env.NEXT_PUBLIC_COMETH_MARKETPLACE_SHIPS_API_URL,
  HEADERS: {
    apikey: env.NEXT_PUBLIC_MARKETPLACE_SHIPS_API_KEY,
  },
})

export const cosmikClient = axios.create({
  baseURL: env.NEXT_PUBLIC_COSMIK_BASE_URL,
  withCredentials: true,
})

export const transakClient = setupCache(
  axios.create({
    baseURL: env.NEXT_PUBLIC_COMETH_ONRAMP_URI,
    headers: {
      "Content-Type": "application/json",
      apikey: env.NEXT_PUBLIC_COMETH_ONRAMP_API_KEY,
    },
  }),
  { debug: console.log }
)

export const coingeckoClient = setupCache(
  axios.create({
    baseURL: "https://api.coingecko.com/api/v3",
    headers: {
      "Content-Type": "application/json",
      "x-cg-demo-api-key": env.NEXT_PUBLIC_COINGECKO_API_KEY,
    },
  }),
  { debug: console.log }
)
