import { manifest } from "@/manifests"
import { useMutation } from "@tanstack/react-query"
import { erc20ABI, readContract } from "@wagmi/core"
import { BigNumberish } from "ethers"
import { Address } from "viem"

import globalConfig from "@/config/globalConfig"
import { ERC20__factory } from "@/lib/generated/contracts"
import { useSigner } from "@/lib/web3/auth"
import { useNFTSwapv4 } from "@/lib/web3/nft-swap-sdk"
import { toast } from "@/components/ui/toast/use-toast"

export const fetchWrappedAllowance = async ({
  address,
  spender,
  contractAddress,
}: {
  address: Address
  spender: Address
  contractAddress: Address
}) => {
  try {
    const result = await readContract({
      address: contractAddress,
      abi: erc20ABI,
      functionName: "allowance",
      args: [address, spender],
    })
    return result
  } catch (error) {
    console.error("Error reading contract:", error)
    return null
  }
}

export type UseAllowanceParameters = {
  address: Address
  spender: Address
}

export type WrappedTokenAllowParams = {
  amount: BigNumberish
}

export const useWrappedTokenAllow = (
  price: BigNumberish,
  options?: {
    onSuccess?: () => void
  }
) => {
  const nftSwapSdk = useNFTSwapv4()
  const signer = useSigner()

  return useMutation(
    ["wrappedTokenAllow"],
    async () => {
      if (!signer || !nftSwapSdk) return
      const spender = nftSwapSdk?.exchangeProxyContractAddress!
      const erc20 = ERC20__factory.connect(
        globalConfig.network.wrappedNativeToken.address,
        signer
      )
      const tx = await erc20.approve(spender, price)
      return tx.wait()
    },
    {
      ...options,
      onSuccess: () => {
        options?.onSuccess?.()
      },
      onError: (error: Error) => {
        console.error(error)
        toast({
          variant: "destructive",
          title: "Error approving token",
          description: error.message,
        })
      },
    }
  )
}
