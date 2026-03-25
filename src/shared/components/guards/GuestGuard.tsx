import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store/useAuthStore'

export const GuestGuard = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}
