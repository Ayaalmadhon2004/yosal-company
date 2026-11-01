import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb066] disabled:pointer-events-none disabled:opacity-50 active:translate-y-0 active:scale-95 font-bold",
  {
    variants: {
      variant: {
        primary: "bg-[#B85A00] text-white shadow-lg hover:bg-[#9A4A00] hover:shadow-[#F58220]/20",
        outline: "border border-[#F58220] bg-transparent text-white hover:bg-[#F58220]/10",
        orange: "bg-[#B85A00] text-white hover:bg-[#9A4A00]",
        ghost: "text-white hover:bg-white/10",
        beige: "bg-[#EDE7D1] text-[#A34700] hover:opacity-90 shadow-lg",
      },
      size: {
        sm: "h-11 px-5 text-sm rounded-xl",
        md: "h-12 px-8 text-base rounded-xl",
        lg: "h-14 px-10 text-lg rounded-[14px]", 
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const AppButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AppButton.displayName = "AppButton"

export { AppButton, buttonVariants }