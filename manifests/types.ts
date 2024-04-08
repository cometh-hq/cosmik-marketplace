import { Address } from "viem"

import { SupportedCurrencies } from "../types/currencies"

export enum AuthenticationUiLibrary {
  RAINBOW_KIT = "RAINBOW_KIT",
  WEB3_MODAL = "WEB3_MODAL",
}

export type CollectionUiSettings = { imageAspectRatio: number, floorPriceAttributeTypes: string[] }

export type Manifest = {
  marketplaceName: string
  contractAddress: Address[]
  shipsContractAddress: Address
  themeClass: string

  pages: {
    asset: {
      excludedAttributesInFilters: string[]
      mainAttributes?: string[]
    }
  }

  chainId: number
  useNativeTokenForOrders: boolean
  erc20: {
    coinGeckoId?: string
    name: string
    symbol: string
    address: string
    decimals: number
    thumb?: string
  } | null
  rpcUrl?: string
  areContractsSponsored: boolean
  walletConnectProjectId: string
  authenticationUiType: AuthenticationUiLibrary

  fiatCurrency: {
    enable: boolean
    currencyId: SupportedCurrencies[]
    currencySymbol: string
  }

  collectionSettingsByAddress: Record<Address, CollectionUiSettings>
}