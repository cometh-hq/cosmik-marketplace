import { useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  useERC20Balance,
  useNativeBalance,
} from "@/services/balance/balanceService"
import { useHasSufficientFunds } from "@/services/balance/fundsService"
import { BigNumber } from "ethers"
import { useAccount } from "wagmi"

import globalConfig from "@/config/globalConfig"
import { Button } from "@/components/ui/Button"
import { Price } from "@/components/ui/Price"
import { InfoBox } from "@/components/ui/MessageBox"

export type FundsStepProps = {
  price: BigNumber
  onValid: () => void
}

export function FundsStep({ price, onValid }: FundsStepProps) {
  const account = useAccount()
  const viewer = account.address
  const {
    balance: nativeBalance,
    refreshBalance: refreshNativeBalance,
    isPending: isPendingNativeBalance,
  } = useNativeBalance(viewer)
  const {
    balance: erc20Balance,
    refreshBalance: refreshErc20Balance,
    isPending: isPendingErc20Balance,
  } = useERC20Balance(globalConfig.ordersErc20.address)
  const isRefreshingBalance = isPendingNativeBalance || isPendingErc20Balance
  const { push } = useRouter()

  const data = useHasSufficientFunds({
    nativeBalance: nativeBalance,
    erc20Balance: erc20Balance,
    price: price,
  })

  useEffect(() => {
    if (data?.hasSufficientFunds === true) {
      return onValid()
    }
  }, [data?.hasSufficientFunds, onValid])

  const checkBalance = useCallback(() => {
    refreshNativeBalance()
    refreshErc20Balance()
  }, [refreshNativeBalance, refreshErc20Balance])

  if (!data?.missingBalance) return null

  const { missingBalance } = data

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-8">
      <h3 className="text-xl font-semibold">Top up your wallet</h3>
      <p className="text-center">
        Looks like you don&rsquo;t have enough funds to complete this
        transaction. <br />
        You are missing{" "}
        <Price
          amount={missingBalance}
          hideSymbol={false}
          isNativeToken={true}
          className="text-accent-foreground"
        />
        . Once you have funded your wallet with some{" "}
        <strong>{globalConfig.ordersDisplayCurrency.name}</strong>, please
        refresh your balance.
      </p>
      <p>
        Wallet address: <strong>{viewer}</strong>
      </p>
      <InfoBox
        title="Warning"
        description={
          <div className="text-muted-foreground">
            Cosmik Battle is deployed on the {globalConfig.network.name} and
            leverages its own Account Abstraction solution. Prior to engaging in
            any wallet-related activity, please visit our wallet tutorials.
            <br />
            <br />
            <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
              <a
                href="https://www.cosmikbattle.com/cosmik-academy/wallet-management"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-foreground font-medium underline transition-colors"
              >
                Wallet Management
              </a>
              and
              <a
                href="https://www.cosmikbattle.com/cosmik-academy/marketplace-gettingready"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-foreground font-medium underline transition-colors"
              >
                Marketplace Getting Ready
              </a>
            </div>
          </div>
        }
      />
      <div className="mt-2 flex gap-4">
        <Button onClick={() => push("/topup")}>Fill your wallet</Button>
        <Button
          variant="link"
          isLoading={isRefreshingBalance}
          onClick={checkBalance}
          className="px-0"
        >
          Refresh balance
        </Button>
      </div>
    </div>
  )
}
