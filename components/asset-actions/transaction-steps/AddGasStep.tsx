import { useEffect } from "react"
import { useNativeBalance } from "@/services/balance/balanceService"
import {
  computeHasEnoughGas,
  useHasEnoughGas,
} from "@/services/balance/gasService"
import { useAccount } from "wagmi"

import globalConfig from "@/config/globalConfig"
import { Button } from "@/components/ui/Button"
import { InfoBox } from "@/components/ui/MessageBox"
import { Price } from "@/components/ui/Price"
import { useRouter } from "next/navigation"

export type AddGasStepProps = {
  onValid: () => void
}

export function AddGasStep({ onValid }: AddGasStepProps) {
  const account = useAccount()
  const { push } = useRouter()
  const viewer = account.address
  const { refreshBalance, isPending: isRefreshingBalance } =
    useNativeBalance(viewer)

  const data = useHasEnoughGas(viewer)

  useEffect(() => {
    if (data?.hasEnoughGas === true) {
      return onValid()
    }
  }, [data?.hasEnoughGas, onValid])

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-8">
      <h3 className="text-xl font-semibold">Top up your wallet</h3>
      <p>
        Looks like you <strong>don&rsquo;t have enough native tokens</strong> to
        pay for transaction gas. Whenever you make a transaction on the
        blockchain, you need to pay a small fee to the miners who process it.
      </p>
      <p>
        Please add{" "}
        <Price
          amount={globalConfig.minimumBalanceForGas}
          isNativeToken={true}
          className="text-accent-foreground"
        />{" "}
        to your wallet, and then refresh your balance. Your transactions will
        not cost as much but we need an minimum amount to be sure you can pay
        for gas.
      </p>
      <p>
        Wallet address: <strong className="break-words">{viewer}</strong>
      </p>

      <InfoBox
        title="Information"
        description={
          <div className="text-muted-foreground">
            Cosmik Battle is deployed on the Muster and leverages its own
            Account Abstraction solution. Prior to engaging in any
            wallet-related activity, please visit our wallet tutorials.
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
          onClick={refreshBalance}
          className="px-0"
        >
          Refresh balance
        </Button>
      </div>
    </div>
  )
}
