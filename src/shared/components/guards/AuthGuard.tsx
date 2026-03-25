import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store/useAuthStore'

export const AuthGuard = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  return <Outlet />
}
