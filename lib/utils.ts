import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 1- check in the mobile one 
// 2- solve the 3 problems 
// 3- make the globals 

