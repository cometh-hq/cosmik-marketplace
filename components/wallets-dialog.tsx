import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { useWeb3OnboardContext } from "@/providers/web3-onboard"
import { comethMarketplaceClient } from "@/services/clients"
import { useAddExternalWallet } from "@/services/cosmik/external-addresses"
import { User } from "@/services/cosmik/signin"
import { useGetUserNonce } from "@/services/cosmik/user-nonce"
import { SupportedNetworks } from "@cometh/connect-sdk"
import {
  AssetSearchFilters,
  SearchAssetResponse,
} from "@cometh/marketplace-sdk"
import { ethers } from "ethers"
import { SiweMessage } from "siwe"
import { Address } from "viem"

import { env } from "@/config/env"
import globalConfig from "@/config/globalConfig"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"
import WalletList from "./wallets/wallet-list"

function numberToHex(value: number): string {
  return `0x${value.toString(16)}`
}

type WalletsDialogProps = {
  user: User
}

export function WalletsDialog({ user }: WalletsDialogProps) {
  const { onboard } = useWeb3OnboardContext()

  const { mutateAsync: getUserNonceAsync } = useGetUserNonce()
  const { mutateAsync: addExternalWalletAsync } = useAddExternalWallet()

  const walletAddress = useRef<string | null>(null)
  const walletState = useRef<any | null>(null)

  const [wallets, setWallets] = useState<{ address: string; items: number }[]>(
    []
  )

  useEffect(() => {
    const initialWallets = [
      { address: user.address, items: 0 },
      ...user.externalAddresses.map((address) => ({ address, items: 0 })),
    ]
    setWallets(initialWallets)
    console.log("on reload l'user")
    updateAssetsCounts(initialWallets.map(({ address }) => address))
  }, [user])

  async function updateAssetsCounts(walletAddresses: string[]) {
    const promises = walletAddresses.map(async (address) => {
      const filters: AssetSearchFilters = {
        contractAddress: globalConfig.contractAddress,
        owner: address,
        limit: 1,
      }

      try {
        const response =
          await comethMarketplaceClient.asset.searchAssets(filters)
        return { address, items: response.total }
      } catch (error) {
        console.error(
          "Error fetching assets count for address:",
          address,
          error
        )
        return { address, items: 0 }
      }
    })

    const results = await Promise.all(promises)
    setWallets(results)
  }

  function getRefsValues() {
    return {
      walletAddress: walletAddress.current,
      wallet: walletState.current,
    }
  }

  function getSigner() {
    const { wallet } = getRefsValues()
    const provider = new ethers.providers.Web3Provider(wallet[0].provider)
    const signer = provider?.getSigner()
    if (!signer) {
      throw new Error("No signer")
    }

    return signer
  }

  async function getUserNonce() {
    const { walletAddress } = getRefsValues()
    if (!walletAddress) {
      throw new Error("No wallet address")
    }
    const { nonce } = await getUserNonceAsync({ walletAddress })

    return nonce
  }

  async function createMessage({
    nonce,
    statement,
  }: {
    nonce: string
    statement: string
  }) {
    const { wallet, walletAddress } = getRefsValues()

    if (!window || !wallet) {
      throw new Error("No window nor wallet")
    }

    const domain = window.location.host
    const uri = window.location.origin

    const message = new SiweMessage({
      domain,
      address: walletAddress as Address,
      statement,
      uri,
      version: "1",
      chainId: Number(
        numberToHex(env.NEXT_PUBLIC_NETWORK_ID) as SupportedNetworks
      ),
      nonce,
    })

    return message
  }

  async function handleAddExternalWallet() {
    try {
      const wallet = await onboard?.connectWallet()
      walletState.current = wallet

      if (!wallet) {
        throw new Error("No wallet")
      }

      const walletAddr = ethers.utils.getAddress(
        wallet?.[0].accounts[0]?.address
      )
      walletAddress.current = walletAddr

      const nonce = await getUserNonce()
      const message = await createMessage({
        nonce,
        statement: "Connect to Ultimate Numbers",
      })

      if (!message) {
        throw new Error("No message")
      }

      const signer = getSigner()
      const messageToSign = message.prepareMessage()
      const signature = await signer.signMessage(messageToSign)

      if (!signature) {
        throw new Error("No signature")
      }

      addExternalWalletAsync({
        walletAddress: walletAddr as Address,
        nonce,
        signature,
        message,
      })
    } catch (error) {
      console.error("Error connecting wallet", error)
    }
  }

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[400px]" shouldDisplayCloseBtn={false}>
        <DialogHeader className="flex-row items-center justify-between space-y-0">
          <DialogTitle className="normal-case">@{user?.userName}</DialogTitle>
        </DialogHeader>
        <ul className="space-y-3">
          <WalletList wallets={wallets} />
        </ul>
        <div className="text-muted-foreground">
          Add an external wallet to link existing assets to your cosmik Battle
          Account
        </div>
        <Button size="lg" onClick={() => handleAddExternalWallet()}>
          Add external wallet
        </Button>
      </DialogContent>
    </Dialog>
  )
}