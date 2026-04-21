import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 font-bold",
  {
    variants: {
      variant: {
        primary: "bg-[#F58220] text-white hover:bg-[#d96d10] hover:shadow-[0_0_20px_rgba(245,130,32,0.3)]",
        outline: "border-2 border-[#F58220] text-[#F58220] hover:bg-[#F58220] hover:text-white",
        ghost: "text-white hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-5 text-sm rounded-full",
        md: "h-11 px-8 text-base rounded-full",
        lg: "h-14 px-10 text-lg rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const AppButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AppButton.displayName = "AppButton"

export { AppButton, buttonVariants }