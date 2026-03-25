import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingLayout } from '../shared/layout/LandingLayout'
import { Home } from '../features/landing-page/pages/Home'
import { AuthLayout } from '../shared/layout/AuthLayout'
import { Login } from '../features/auth/pages/Login'
import { Signup } from '../features/auth/pages/Signup'
import { Dashboard } from '../features/dashboard/pages/Dashboard'
import { AuthGuard } from '../shared/components/guards/AuthGuard'
import { GuestGuard } from '../shared/components/guards/GuestGuard'

/**
 * Global App Router.
 * Centralizes all application routes.
 */
export function AppRouter() {
  return (
    <Routes>
      {/* Public routes only accessible to guests */}
      <Route element={<GuestGuard />}>
        <Route element={<LandingLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Route>

      {/* Protected routes only accessible to authenticated users */}
      <Route element={<AuthGuard />}>
        <Route path="/dashboard" element={<LandingLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>

      {/* Redirect any unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
