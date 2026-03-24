import { Outlet } from 'react-router-dom'

export const LandingLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Outlet />
    </div>
  )
}
