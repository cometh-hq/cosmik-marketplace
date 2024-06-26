import { useCallback, useEffect } from "react"
import { User, useCosmikSignin } from "@/services/cosmik/signinService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form"

import { Button } from "../ui/Button"
import { Input } from "../ui/Input"

interface SignInFormProps {
  onLoginSuccess: (user: User) => void
  isLoading?: boolean
}

export function SignInForm({ onLoginSuccess, isLoading }: SignInFormProps) {
  const {
    mutate: signin,
    isSuccess,
    data: userData,
    isPending,
  } = useCosmikSignin()

  useEffect(() => {
    if (isSuccess && userData) {
      onLoginSuccess(userData.user)
    }
  }, [isSuccess, userData, onLoginSuccess])
  
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  })

  const handleSubmit = useCallback(
    (data: z.infer<typeof formSchema>) => {
      signin({ username: data.email, password: data.password })
    },
    [signin]
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full"
          size="lg"
          type="submit"
          isLoading={isPending || isLoading}
          disabled={isPending || isLoading}
        >
          Connect my account
        </Button>
      </form>
    </Form>
  )
}
