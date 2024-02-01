import { cn } from "@/lib/utils"

type DividerProps = {
    className?: string
    direction?: "horizontal" | "vertical"
}

export const Divider: React.FC<DividerProps> = ({ className, direction="horizontal" }) => {
  return (
    <div>{direction === "horizontal"
      ? <div className={cn("border-t-[1px] w-full bg-neutral-300", className)} />
      : <div className={cn("border-r-[1px] h-full bg-neutral-300", className)} />}
    </div>
  )
}
