import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-3xl border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-[#161839]/50 border-white/5 shadow-xl",
        featured: "bg-[#161839] border-[#F58220] shadow-[0_0_30px_rgba(245,130,32,0.15)]",
        glass: "bg-white/5 border-white/10 backdrop-blur-lg"
      },
      padding: {
        default: "p-8",
        small: "p-6",
        large: "p-10"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, // what is this line mean 
    VariantProps<typeof cardVariants> {}

const AppCard = React.forwardRef<HTMLDivElement, CardProps>( // what is this mean 
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
)
AppCard.displayName = "AppCard"


const AppCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-3 mb-6", className)} {...props} />
  )
)
AppCardHeader.displayName = "AppCardHeader"

const AppCardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-bold leading-none tracking-tight text-white", className)} {...props} />
  )
)
AppCardTitle.displayName = "AppCardTitle"

const AppCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>( // what is this line mean ?
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-gray-400 font-medium leading-relaxed", className)} {...props} />
  )
)
AppCardDescription.displayName = "AppCardDescription"

const AppCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
)
AppCardContent.displayName = "AppCardContent"

export { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent }