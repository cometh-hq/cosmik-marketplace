import { NextRequest } from "next/server"

import { coingeckoClient } from "@/lib/clients"

export const revalidate = 60 * 10

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const id = searchParams.get("id")
  const currencies = searchParams.get("currency")

  try {
    if (!id || !currencies) {
      throw new Error("Invalid request")
    }

    const currencyList = currencies.split(",")

    const res = await coingeckoClient.get(
      `/simple/price?ids=${id}&vs_currencies=${currencyList.join(",")}`,
      {
        id: `fiat-currency-price-${id}-${currencies}`,
        cache: {
          ttl: 90 * 60 * 1000,
        },
      }
    )
    const currentFiatPrice = res.data

    return Response.json({ currentFiatPrice }, { status: 200 })
  } catch (error: any) {
    console.error(error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
