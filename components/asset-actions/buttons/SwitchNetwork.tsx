"use client"

import { AlertCircle, Loader } from "lucide-react"

import { useCorrectNetwork } from "@/lib/web3/network"

import { Button } from "../../ui/Button"

type SwitchNetworkProps = {
  children?: React.ReactNode
}

export const SwitchNetwork = ({ children }: SwitchNetworkProps) => {
  const { isChainSupported, switchNetwork, switchNetworkLoading } =
    useCorrectNetwork()

  return (
    <>
      {isChainSupported ? (
        children
      ) : (
        <div className="text-destructive flex items-center justify-center gap-2">
          <AlertCircle size="16" />
          <>
            <span className="text-sm font-medium">Network not supported.</span>
            <Button
              variant="destructive"
              className="h-8 px-3 font-medium"
              onClick={switchNetwork}
              disabled={switchNetworkLoading}
            >
              <span className="flex items-center gap-2">
                {switchNetworkLoading ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Switching
                  </>
                ) : (
                  "Switch now"
                )}
              </span>
            </Button>
          </>
        </div>
      )}
    </>
  )
}
