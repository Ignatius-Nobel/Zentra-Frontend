import { Button } from '@/shared/ui/button'
import { Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Rocket className="size-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">Zentra</span>
        </div>
        {/* <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-zinc-50 transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-zinc-50 transition-colors">Testimonials</a>
          <a href="#pricing" className="hover:text-zinc-50 transition-colors">Pricing</a>
        </nav> */}
        <div className="flex items-center gap-4">
          {/* <Button variant="ghost" className="hidden md:inline-flex text-zinc-300 hover:text-white hover:bg-zinc-800">
            Log in
          </Button> */}
          <Link to="/signup">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
