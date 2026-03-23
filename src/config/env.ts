/**
 * Centralized environment configuration.
 * Using a simple object to export env variables with validation if needed.
 */
export const ENV = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  ENV: import.meta.env.MODE || 'development',
  IS_DEV: import.meta.env.DEV,
} as const
