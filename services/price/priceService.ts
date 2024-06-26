import { useMemo } from "react"
import { manifest } from "@/manifests/manifests"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { env } from "@/config/env"
import globalConfig from "@/config/globalConfig"

const coinId = globalConfig.coinGeckoId?.toLowerCase()
const fiatCurrencyId = manifest.fiatCurrency?.currencyId

const useCurrencyFiatPrice = ({
  currency = "usd",
}: { currency?: string } = {}) => {
  return useQuery({
    queryKey: ["fiat-price", currency && currency],
    queryFn: async () => {
      if (!coinId) {
        throw new Error("erc20.id is not defined in the manifest")
      }

      if (!fiatCurrencyId) {
        throw new Error("currencySymbol is not defined in the manifest")
      }

      const currencies = fiatCurrencyId.join(",")

      const res = await axios.get(
        `${env.NEXT_PUBLIC_BASE_PATH}/api/fiat-currency-price?id=${coinId}&currency=${currencies}`
      )
      const price = res.data.currentFiatPrice[coinId][currency]
      return price as number
    },
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 90,
    enabled: manifest.fiatCurrency.enable,
  })
}

export const useConvertPriceToFiat = (
  amount?: number | null,
  currency?: string
) => {
  const { data: price } = useCurrencyFiatPrice({
    currency: currency?.toLocaleLowerCase(),
  })

  return useMemo(() => {
    if (!manifest.fiatCurrency.enable) {
      return null
    }
    if (!amount || isNaN(amount) || !price || price === 0) {
      return null
    }
    const fiatPrice = amount * price
    return Math.round(fiatPrice * 100) / 100
  }, [amount, price])
}