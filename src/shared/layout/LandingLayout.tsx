import { Outlet } from 'react-router-dom'

export const LandingLayout = () => {
  return (
    <div className="flex h-screen w-full bg-zinc-950 text-zinc-50 overflow-hidden">
      <Outlet />
    </div>
  )
}
