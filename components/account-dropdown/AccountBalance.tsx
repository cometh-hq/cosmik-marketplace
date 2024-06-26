import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useAllBalances } from "@/services/balance/balanceService"

import { env } from "@/config/env"
import globalConfig from "@/config/globalConfig"
import { Button } from "@/components/ui/Button"
import { FiatPrice } from "@/components/ui/FiatPrice"
import { Separator } from "@/components/ui/Separator"
import { WrapButton } from "@/components/asset-actions/buttons/WrapButton"

import ERC20TransferButton from "../activities/account/ERC20TransferButton"

export function AccountBalance({ hideFillWallet = false }: { hideFillWallet?: boolean }) {
  const balance = useAllBalances()
  const [isUnwrap, setIsUnwrap] = useState(false)
  const { push } = useRouter()

  return (
    <>
      <div className="border-accent/10 mb-3 space-y-3 rounded-md border p-3">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <AccountBalanceLine
              balance={balance.native}
              currency={globalConfig.network.nativeToken.symbol}
              logo={globalConfig.network.nativeToken.thumb}
              hideFiatPrice={!globalConfig.useNativeForOrders}
            />
            <ERC20TransferButton
              tokenSymbol={globalConfig.network.nativeToken.symbol}
              decimalNumber={globalConfig.network.nativeToken.decimals}
              variant="ghost"
            />
          </div>

          <Separator />

          <AccountBalanceLine
            balance={
              globalConfig.useNativeForOrders ? balance.wrapped : balance.ERC20
            }
            currency={globalConfig.ordersErc20.symbol}
            logo={globalConfig.ordersErc20.thumb}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {!hideFillWallet && (
          <Button className="w-full" onClick={() => push("/topup")}>
            Fill your wallet
          </Button>
        )}
        {globalConfig.useNativeForOrders && (
          <div className="grid">
            <WrapButton
              isUnwrap={isUnwrap}
              onToggleMode={() => setIsUnwrap(!isUnwrap)}
            />
          </div>
        )}
      </div>
    </>
  )
}

type AccountBalanceLineProps = {
  balance: string
  currency: string
  logo?: string | { native: string; wrapped: string }
  hideFiatPrice?: boolean
}

export function AccountBalanceLine({
  balance,
  currency,
  logo,
  hideFiatPrice = false,
}: AccountBalanceLineProps) {
  const logoSrc =
    typeof logo === "string" ? logo : logo?.native || logo?.wrapped

  return (
    <div className="inline-flex items-center gap-1.5">
      {logo && (
        <div className="bg-secondary rounded-full">
          <Image
            src={`${env.NEXT_PUBLIC_BASE_PATH}/tokens/${logoSrc}`}
            alt=""
            width={20}
            height={20}
          />
        </div>
      )}
      <span className="text-[15px] font-semibold">
        {balance} {currency}
      </span>
      {balance !== "0.0" && (
        <span>
          {" "}
          <FiatPrice amount={balance} />
        </span>
      )}
    </div>
  )
}
