import { ENV } from '@/config/env'
import type { AuthResponse } from '../types/auth.types'

/**
 * Helper to handle fetch responses and standardize errors
 */
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    let errorMessage = 'An error occurred'
    try {
      const data = await response.json()
      errorMessage = data.message || errorMessage
    } catch {
      errorMessage = response.statusText || errorMessage
    }
    throw new Error(errorMessage)
  }
  return response.json()
}

/**
 * Authentication service handling API requests
 */
export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${ENV.API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    return handleResponse<AuthResponse>(response)
  },

  async signup(name: string, email: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${ENV.API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
    return handleResponse<AuthResponse>(response)
  },

  async logout(token?: string): Promise<void> {
    if (token) {
      await fetch(`${ENV.API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
    }
  },
}
