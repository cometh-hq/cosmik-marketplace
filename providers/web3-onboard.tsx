"use client"

import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { manifest } from "@/manifests"
import {
  ComethWallet,
  ConnectAdaptor,
  ConnectOnboardConnector,
  NewSignerRequestBody,
  NewSignerRequestType,
  SupportedNetworks,
} from "@cometh/connect-sdk"

import "@web3-onboard/common"

import {
  useStorageWallet,
  useWalletAddressFromStorage,
} from "@/services/web3/use-storage-wallet"
import bitgetWalletModule from "@web3-onboard/bitget"
import bloctoModule from "@web3-onboard/blocto"
import Onboard, { OnboardAPI } from "@web3-onboard/core"
import dcentModule from "@web3-onboard/dcent"
import enrkypt from "@web3-onboard/enkrypt"
import frameModule from "@web3-onboard/frame"
import frontierModule from "@web3-onboard/frontier"
import infinityWalletWalletModule from "@web3-onboard/infinity-wallet"
import injectedModule from "@web3-onboard/injected-wallets"
import mewWallet from "@web3-onboard/mew-wallet"
import phantomModule from "@web3-onboard/phantom"
import torusModule from "@web3-onboard/torus"
import xdefiWalletModule from "@web3-onboard/xdefi"
import zealWalletModule from "@web3-onboard/zeal"
import { isAddress } from "ethers/lib/utils"

import { env } from "@/config/env"
import networks from "@/config/networks"
import { COMETH_CONNECT_STORAGE_LABEL } from "@/config/site"
import { useDisconnect } from "@/lib/web3/auth"
import { toast } from "@/components/ui/toast/use-toast"

import { useAuthContext } from "./auth"

// const walletConnect = walletConnectModule({
//   version: 2,
//   projectId: process.env.WALLET_CONNECT_PROJECTID || "projectId",
// });

const web3OnboardNetworks = Object.values(networks).map((network) => {
  return {
    id: network.hexaId,
    token: network.nativeToken.symbol,
    label: network.name,
  }
})

export interface SetOnboardOptions {
  isComethWallet: boolean
  walletAddress?: string
}

const Web3OnboardContext = createContext<{
  onboard: OnboardAPI | null
  initOnboard: (options: SetOnboardOptions) => void
  isConnected: boolean
  setIsconnected: Dispatch<SetStateAction<boolean>>
  reconnecting: boolean
  initNewSignerRequest: (walletAddress: string) => Promise<NewSignerRequestBody>
  retrieveWalletAddressFromSigner: (walletAddress: string) => Promise<void>
}>({
  onboard: null,
  initOnboard: () => {},
  isConnected: false,
  setIsconnected: () => {},
  reconnecting: false,
  initNewSignerRequest: () =>
    Promise.resolve({
      walletAddress: "",
      signerAddress: "",
      deviceData: {
        browser: "",
        os: "",
        platform: "",
      },
      type: NewSignerRequestType.WEBAUTHN,
    }),
  retrieveWalletAddressFromSigner: () => Promise.resolve(),
})

export function useWeb3OnboardContext() {
  return useContext(Web3OnboardContext)
}

function numberToHex(value: number): string {
  return `0x${value.toString(16)}`
}

function getSupportedNetworkId(
  networkId: number
): SupportedNetworks | undefined {
  const networkHex = numberToHex(networkId)
  const networks = Object.values(SupportedNetworks)
  return networks.find((network) => network === networkHex)
}

export function Web3OnboardProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [onboard, setOnboard] = useState<OnboardAPI | null>(null)
  const [isConnected, setIsconnected] = useState<boolean>(false)
  const [reconnecting, setReconnecting] = useState<boolean>(false)
  const { walletAddressFromStorage } = useWalletAddressFromStorage()
  const { getUser, isUserLoggedFetched } = useAuthContext()
  const walletLogout = useDisconnect()

  const chainId = getSupportedNetworkId(env.NEXT_PUBLIC_NETWORK_ID)

  if (!chainId) {
    throw new Error("Network not supported by Cometh Connect.")
  }

  const retrieveWalletAddressFromSigner = async (walletAddress: string) => {
    console.log("walletAddress 1", walletAddress)
    if (!isAddress(walletAddress)) {
      throw new Error("Invalid wallet address.")
    }

    const connectAuthAdaptor = new ConnectAdaptor({
      chainId: chainId,
      apiKey: process.env.NEXT_PUBLIC_COMETH_CONNECT_API_KEY!,
      baseUrl: process.env.NEXT_PUBLIC_COMETH_CONNECT_BASE_URL!,
    })

    const wallet = new ComethWallet({
      authAdapter: connectAuthAdaptor,
      apiKey: process.env.NEXT_PUBLIC_COMETH_CONNECT_API_KEY!,
    })
    await wallet.connect(walletAddress)
  }

  const initNewSignerRequest = async (walletAddress: string) => {
    if (!isAddress(walletAddress)) {
      throw new Error("Invalid wallet address.")
    }

    const connectAuthAdaptor = new ConnectAdaptor({
      chainId: chainId,
      apiKey: process.env.NEXT_PUBLIC_COMETH_CONNECT_API_KEY!,
      baseUrl: process.env.NEXT_PUBLIC_COMETH_CONNECT_BASE_URL!,
    })

    return await connectAuthAdaptor.initNewSignerRequest(walletAddress)
  }

  const initOnboard = useCallback((options: SetOnboardOptions) => {
    const wallets = [
      injectedModule(),
      torusModule(),
      phantomModule(),
      mewWallet(),
      bitgetWalletModule(),
      bloctoModule(),
      dcentModule(),
      enrkypt(),
      frameModule(),
      frontierModule(),
      infinityWalletWalletModule(),
      zealWalletModule(),
      xdefiWalletModule(),
      // walletConnect,
    ]
    if (options.isComethWallet) {
      // TODO: Remove hack once connect is fixed and removed the spread
      const uiConfig = {
        uiConfig: {
          displayValidationModal: false,
        },
      } as any

      const connectAdaptor = new ConnectAdaptor({
        chainId: numberToHex(env.NEXT_PUBLIC_NETWORK_ID) as SupportedNetworks,
        apiKey: env.NEXT_PUBLIC_COMETH_CONNECT_API_KEY!,
        baseUrl: process.env.NEXT_PUBLIC_COMETH_CONNECT_BASE_URL!,
      })
      let addressToUse = options.walletAddress

      const connectConnector = ConnectOnboardConnector({
        apiKey: env.NEXT_PUBLIC_COMETH_CONNECT_API_KEY!,
        authAdapter: connectAdaptor,
        ...(addressToUse && {
          walletAddress: addressToUse,
        }),
        uiConfig: uiConfig,
      })

      wallets.push(connectConnector)
    }

    const web3OnboardInstance = Onboard({
      wallets,
      chains: web3OnboardNetworks,
      appMetadata: {
        name: manifest.collectionName,
        description: "Description",
        icon: `${env.NEXT_PUBLIC_BASE_PATH}/marketplace.png`,
        logo: `${env.NEXT_PUBLIC_BASE_PATH}/metamask.svg`,
        recommendedInjectedWallets: [
          { name: "MetaMask", url: "https://metamask.io" },
        ],
      },
      theme: manifest.web3Onboard?.theme,
      accountCenter: {
        desktop: {
          enabled: false,
        },
        mobile: {
          enabled: false,
        },
      },
    })

    setOnboard(web3OnboardInstance)
  }, [])

  useEffect(() => {
    initOnboard({ isComethWallet: false })
  }, [])

  useEffect(() => {
    const currentWalletInStorage = localStorage.getItem("selectedWallet")
    const isComethWallet =
      currentWalletInStorage === COMETH_CONNECT_STORAGE_LABEL
    if (
      isComethWallet &&
      walletAddressFromStorage &&
      isAddress(walletAddressFromStorage)
    ) {
      initOnboard({
        isComethWallet,
        walletAddress: walletAddressFromStorage,
      })
    }

    const startReconnecting = async () => {
      setReconnecting(true)
      try {
        // if (!isAddress(currentWalletInStorage!)) {
        //   throw new Error("Invalid wallet address.")
        // }
        const connectionResult = await onboard?.connectWallet({
          autoSelect: {
            label: currentWalletInStorage!,
            disableModals: true,
          },
        })
        const walletAddress = connectionResult?.[0].accounts[0]?.address
        if (walletAddress !== getUser()?.address) {
          walletLogout({
            label: connectionResult?.[0]?.label!,
          })
          throw new Error(
            "Your Cosmik wallet address doesn't match the one stored in your browser. Please contact support. #2"
          )
        }
        if (connectionResult?.length) {
          setIsconnected(true)
          setReconnecting(false)
        }
      } catch (error: any) {
        console.error("Error reconnecting wallet", error)
        toast({
          title: "Error reconnecting wallet",
          description: error.message,
          variant: "destructive",
          duration: 5000,
        })
        setIsconnected(false)
        setReconnecting(false)
      }
    }

    /* if user exist, start reconnecting */
    if (
      isUserLoggedFetched &&
      currentWalletInStorage &&
      walletAddressFromStorage
    ) {
      console.log("userLoaded", getUser())
      startReconnecting()
    }
  }, [
    initOnboard,
    onboard,
    walletAddressFromStorage,
    isUserLoggedFetched,
    getUser,
    walletLogout,
  ])

  return (
    <Web3OnboardContext.Provider
      value={{
        onboard,
        initOnboard,
        isConnected,
        setIsconnected,
        reconnecting,
        initNewSignerRequest,
        retrieveWalletAddressFromSigner,
      }}
    >
      {children}
    </Web3OnboardContext.Provider>
  )
}
