"use client"
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AppButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function AppButton({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  onClick 
}: AppButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-bold active:scale-95 disabled:opacity-50"
  
  const variants = {
    primary: "bg-[#F58220] text-white hover:bg-[#d96d10] hover:shadow-[0_0_20px_rgba(245,130,32,0.3)]",
    outline: "border-2 border-[#F58220] text-[#F58220] hover:bg-[#F58220] hover:text-white"
  }

  const sizes = {
    sm: "px-5 py-2 text-sm rounded-full",
    md: "px-8 py-3 text-base rounded-full",
    lg: "px-10 py-4 text-lg rounded-full"
  }

  return (
    <button 
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  )
}