import { cn } from "@/lib/utils/utils"

import { Card, CardContent } from "./ui/Card"

export type ProductBlockContainerProps = {
  children: React.ReactNode | React.ReactNode[]
}

export function ProductBlockContainer({
  children,
}: ProductBlockContainerProps) {
  return (
    <Card className="btn-default bg-primary/20 text-accent before:bg-primary/20 relative after:content-none">
      <CardContent className="py-[22px]">
        <div className="flex h-full flex-wrap items-stretch justify-between gap-4">
          {children}
        </div>
      </CardContent>
    </Card>
  )
}

export type ProductBlockDividedColumnProps = {
  children: [React.ReactNode, React.ReactNode]
  hideOnMobile?: boolean
}

export function ProductBlockDividedColumn({
  children,
  hideOnMobile,
}: ProductBlockDividedColumnProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-2",
        hideOnMobile ? "hidden md:flex" : "flex"
      )}
    >
      {children}
    </div>
  )
}

export type ProductBlockCenteredColumnProps = {
  children: React.ReactNode
}

export function ProductBlockCenteredColumn({
  children,
}: ProductBlockCenteredColumnProps) {
  return <div className="flex w-full flex-col gap-3">{children}</div>
}

export type ProductBlockColumnLabel = {
  children: React.ReactNode
}

export function ProductBlockLabel({ children }: ProductBlockColumnLabel) {
  return <span className="font-medium text-white">{children}</span>
}
