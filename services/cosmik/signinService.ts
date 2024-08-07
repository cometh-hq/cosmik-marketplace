import { useMutation, useQueryClient } from "@tanstack/react-query"

import { cosmikClient } from "@/lib/clients"
import { toast } from "@/components/ui/toast/hooks/useToast"

interface SignInBody {
  username: string
  password: string
}

export type User = {
  id: string
  address: string
  userName: string
  email: string
  coins: number
  aurium: number
  externalAddresses: Array<string>
}

export const useCosmikSignin = () => {
  const client = useQueryClient()

  return useMutation({
    mutationKey: ["cosmik, signin"],
    mutationFn: async (credentials: SignInBody) => {
      const { data } = await cosmikClient.post("/login", credentials)
      if (typeof data.user.address === "undefined" || !data.user.address) {
        throw new Error("Wallet address is not defined. Please contact support")
      }
      return data
    },
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["cosmik", "logged"],
      })
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.status === 400
          ? "Please check your username and password"
          : error?.message || "An error occurred"

      toast({
        title: "Échec de la connexion",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      })
    },
  })
}
