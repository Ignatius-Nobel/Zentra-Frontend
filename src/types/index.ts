/**
 * Application-wide TypeScript definitions.
 */

export interface User {
  id: string
  email: string
  name?: string
  avatarUrl?: string
}

export interface Workspace {
  id: string
  name: string
  ownerId: string
}

export type ApiResponse<T> = {
  data: T
  message?: string
  success: boolean
}
