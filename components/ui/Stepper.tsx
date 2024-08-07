import { intercalate } from "@/lib/utils/arrays"
import { cn } from "@/lib/utils/utils"

export type Step = {
  value: string
  label: string
}

export type StepperProps<T extends Step> = {
  value: string
  steps: T[]
}

export const Stepper = <T extends Step>({ steps, value }: StepperProps<T>) => {
  const currentIndex = steps.findIndex((step) => step.value === value)

  return (
    <div className="mx-[32px] mb-[32px] mt-4 flex justify-evenly">
      {intercalate<React.ReactNode | null>(
        (index) => (
          <StepperSeparator
            key={`separator-${index}`}
            active={index <= currentIndex - 1}
          />
        ),
        steps.map((step, index) => (
          <StepperStep
            key={index}
            index={index}
            active={index <= currentIndex}
            current={index === currentIndex}
            name={step.label}
          />
        ))
      )}
    </div>
  )
}

export type StepperStepProps = {
  index: number
  active: boolean
  current: boolean
  name: string
}

export const StepperStep = ({ index, active, current, name }: StepperStepProps) => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className={cn(
          "flex size-[24px] items-center justify-center rounded-lg",
          active ? "bg-white/10" : "bg-card"
        )}
      >
        <span className={"text-accent-foreground text-sm font-bold"}>
          {index + 1}
        </span>
      </div>
      <p
        className={cn(
          "absolute translate-y-[32px] whitespace-nowrap text-sm font-semibold",
          active ? "text-white" : "text-white/80",
          current ? "text-accent-foreground" : null
        )}
      >
        {name}
      </p>
    </div>
  )
}

const StepperSeparator = ({ active }: { active: boolean }) => {
  return (
    <div
      className={cn(
        "h-0.5 flex-1 translate-y-[12px]",
        active ? "bg-white" : "bg-white/20"
      )}
    />
  )
}
