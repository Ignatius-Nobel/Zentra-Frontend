import { Rocket } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background text-muted-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Rocket className="size-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">Zentra</span>
          </div>
          <p className="text-sm">
            The project management tool for minimalists. <br /> Built for speed, clarity, and focus.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-foreground font-semibold mb-1">Product</h4>
          <a href="#" className="text-sm hover:text-primary">
            Features
          </a>
          <a href="#" className="text-sm hover:text-primary">
            Integrations
          </a>
          <a href="#" className="text-sm hover:text-primary">
            Pricing
          </a>
          <a href="#" className="text-sm hover:text-primary">
            Changelog
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-foreground font-semibold mb-1">Company</h4>
          <a href="#" className="text-sm hover:text-primary">
            About Us
          </a>
          <a href="#" className="text-sm hover:text-primary">
            Blog
          </a>
          <a href="#" className="text-sm hover:text-primary">
            Careers
          </a>
          <a href="#" className="text-sm hover:text-primary">
            Contact
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-foreground font-semibold mb-1">Legal</h4>
          <a href="#" className="text-sm hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Zentra, Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground">
            Twitter
          </a>
          <a href="#" className="hover:text-foreground">
            GitHub
          </a>
          <a href="#" className="hover:text-foreground">
            Discord
          </a>
        </div>
      </div>
    </footer>
  )
}
