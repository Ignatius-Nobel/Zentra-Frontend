import { Routes, Route } from 'react-router-dom'
import { LandingLayout } from '../shared/layout/LandingLayout'
import { Home } from '../features/landing-page/pages/Home'
import { AuthLayout } from '../shared/layout/AuthLayout'
import { Login } from '../features/auth/pages/Login'
import { Signup } from '../features/auth/pages/Signup'

/**
 * Global App Router.
 * Centralizes all application routes.
 */
export function AppRouter() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      {/* 
        Add other feature routes here, for example:
        <Route path="/workspace" element={<WorkspaceLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      */}
    </Routes>
  )
}
