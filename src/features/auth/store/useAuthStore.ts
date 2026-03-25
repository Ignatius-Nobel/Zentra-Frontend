import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { authService } from '../api/auth.service'
import type { User } from '../types/auth.types'

interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null
  isAuthenticated: boolean
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  clearError: () => void
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,

      login: async (email, password) => {
        set({ isLoading: true, error: null })
        try {
          const { user, token } = await authService.login(email, password)
          set({ user, token, isAuthenticated: true, isLoading: false })
        } catch (error: unknown) {
          const message = error instanceof Error ? error.message : 'An unknown error occurred'
          set({ error: message, isLoading: false, isAuthenticated: false })
          throw error
        }
      },

      signup: async (name, email, password) => {
        set({ isLoading: true, error: null })
        try {
          const { user, token } = await authService.signup(name, email, password)
          set({ user, token, isAuthenticated: true, isLoading: false })
        } catch (error: unknown) {
          const message = error instanceof Error ? error.message : 'An unknown error occurred'
          set({ error: message, isLoading: false, isAuthenticated: false })
          throw error
        }
      },

      logout: () => {
        const { token } = get()
        set({ user: null, token: null, isAuthenticated: false })
        if (token) {
          authService.logout(token).catch(console.error)
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }), // only save these fields
    },
  ),
)
