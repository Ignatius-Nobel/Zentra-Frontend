import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface AppProviderProps {
  children: ReactNode
}

/**
 * Unified provider wrapper for the application.
 * Add other providers like ThemeProvider, QueryClientProvider, etc., here.
 */
export function AppProvider({ children }: AppProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>
}
