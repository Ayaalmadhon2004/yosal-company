import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 font-bold",
  {
    variants: {
      variant: {
        // الزر الكريمي بتوهج برتقالي (الزر الرئيسي في الهوية)
        primary: "bg-[#F3EADA] text-[#F58220] shadow-[0_0_20px_rgba(245,130,32,0.4)] hover:shadow-[0_0_30px_rgba(245,130,32,0.6)] hover:scale-[1.02]",
        
        // زر "شاهد أعمالنا" (إطار برتقالي خفيف وخلفية داكنة)
        outline: "border-2 border-[#F58220]/50 bg-[#1A1C2E]/50 text-white hover:bg-[#F58220]/10 hover:border-[#F58220]",
        
        // زر بلون البرتقالي الكامل (اختياري لبعض الأقسام)
        orange: "bg-[#F58220] text-white hover:bg-[#E0721B] shadow-lg",
        
        ghost: "text-white hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-5 text-sm rounded-xl",
        md: "h-12 px-8 text-base rounded-xl",
        lg: "h-14 px-10 text-lg rounded-2xl", // للـ Hero و CTA
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