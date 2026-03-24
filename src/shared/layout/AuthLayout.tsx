import { Outlet } from 'react-router-dom'
import { Rocket } from 'lucide-react'

export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-primary/5 pointer-events-none" />

      <div className="z-10 flex flex-col items-center gap-6 w-full max-w-sm">
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
            <Rocket className="size-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">Zentra</span>
        </a>

        <Outlet />
      </div>
    </div>
  )
}
