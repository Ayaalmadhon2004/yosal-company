import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // استيراد الـ Slot
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 font-bold outline-none",
  {
    variants: {
      variant: {
        primary: "bg-[#F58220] text-white shadow-lg hover:bg-[#E0721B] hover:shadow-[#F58220]/20",
        outline: "border border-[#F58220] bg-transparent text-white hover:bg-[#F58220]/10",
        orange: "bg-[#F58220] text-white hover:bg-[#E0721B]",
        ghost: "text-white hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-5 text-sm rounded-xl",
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
  asChild?: boolean // إضافة التعريف هنا
}

const AppButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // إذا كانت asChild مفعلة، نستخدم Slot، وإلا نستخدم button
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