import { Button } from '@/shared/ui/button'
import { ArrowRight } from 'lucide-react'
import dashboardPreview from '../../../assets/dashboard-preview.svg'
import { Link } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/20 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 mb-8">
          <Sparkles className="size-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Currently in the MVP stage
          </span>
        </div> */}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mb-6 leading-tight">
          Manage your projects with <span className="text-primary">effortless clarity</span>.
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          The minimal, beautiful project management app designed to help you organize tasks,
          collaborate in real-time, and ship faster without the clutter.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link to="/signup">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px] h-12 text-base font-medium cursor-pointer"
            >
              Start Building
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </Link>
          {/* <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px] h-12 border-border bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground text-base font-medium">
            See how it works
          </Button> */}
        </div>

        {/* Dashboard preview placeholder */}
        <div className="mt-16 w-full max-w-5xl rounded-2xl border border-border bg-background p-2 md:p-4 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 rounded-2xl pointer-events-none" />
          <img
            src={dashboardPreview}
            alt="Kanban Board Mockup"
            className="w-full h-auto rounded-xl shadow-lg border border-border bg-card relative z-0"
          />
        </div>
      </div>
    </section>
  )
}
