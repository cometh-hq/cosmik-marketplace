import { useState } from "react"
import { useConnectComethWallet } from "@/providers/authentication/comethConnectHooks"
import Bugsnag from "@bugsnag/js"

import { Button } from "@/components/ui/Button"
import { toast } from "@/components/ui/toast/hooks/useToast"
import { User } from "@/services/cosmik/signinService"

export type RefreshStepProps = {
  user: User
  onValid: () => void
}

export const RefreshStep: React.FC<RefreshStepProps> = ({
  user,
  onValid,
}) => {
  const { retrieveWalletAddress } = useConnectComethWallet()
  const [isLoading, setIsLoading] = useState(false)

  const handleRefresh = async () => {
    setIsLoading(true)
    try {
      await retrieveWalletAddress(user.address)
      toast({
        title: "Device succesfully Authorized!",
        description:
          "Your Cosmik Battle account has been successfully linked to the marketplace.",
        variant: "default",
      })
      onValid()
    } catch (error: any) {
      Bugsnag.notify(error as Error, function (report) {
        report.context = "User Login - Refresh Authorization Request"
        report.setUser(user.id, user.email, user.userName)
        report.addMetadata("user", user)
      })
      toast({
        title: "Something went wrong",
        description: error?.message || "Please try again or contact support",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <p className="text-muted-foreground">
        Please log-in to Cosmik Battle (the game) and validate this device to
        retrieve your items. Once this device is validated, please press refresh
        to update your inventory.
      </p>
      <Button
        size="lg"
        onClick={handleRefresh}
        isLoading={isLoading}
        disabled={isLoading}
      >
        Refresh
      </Button>
    </>
  )
}
