import { Routes, Route } from 'react-router-dom'
import { LandingLayout } from '../shared/layout/LandingLayout'
import { Home } from '../features/landing-page/pages/Home'

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
      {/* 
        Add other feature routes here, for example:
        <Route path="/workspace" element={<WorkspaceLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      */}
    </Routes>
  )
}
