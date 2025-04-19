import { type ClassValue, clsx } from "clsx";

/**
 * Combines multiple class names or class name conditions into a single string
 * Uses clsx for conditional class merging
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
} 