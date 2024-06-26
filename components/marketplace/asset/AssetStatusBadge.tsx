import { ComponentProps } from "react"

import { AssetStatus } from "@/types/assets"
import { Badge } from "@/components/ui/Badge"

const colors: Record<AssetStatus, ComponentProps<typeof Badge>["variant"]> = {
  listed: "success",
  "not-listed": "background",
} as const

const content: Record<AssetStatus, string> = {
  listed: "Listed",
  "not-listed": "Not Listed",
} as const

export type AssetStatusBadgeProps = {
  status: AssetStatus
}

export function AssetStatusBadge({ status }: AssetStatusBadgeProps) {
  // return <Badge variant={colors[status]}>{content[status]}</Badge>
  return (
    <div className="text-accent text-lg font-medium">{content[status]}</div>
  )
}
