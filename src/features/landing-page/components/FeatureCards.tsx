import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { CheckCircle2, Layout, Zap, Lock, Users, BarChart3 } from 'lucide-react'

const features = [
  {
    title: 'Intuitive Task Boards',
    description: 'Organize work into custom lanes. Drag and drop to prioritize what matters.',
    icon: Layout,
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work together effortlessly with live updates, comments, and mentions.',
    icon: Users,
  },
  {
    title: 'Instant Progress Tracking',
    description: 'Visualize project health instantly with automated progress bars and burndowns.',
    icon: BarChart3,
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed. No loading spinners, just instant feedback.',
    icon: Zap,
  },
  {
    title: 'Enterprise Security',
    description: 'Your data is secured with end-to-end encryption and SOC2 compliance.',
    icon: Lock,
  },
  {
    title: 'Simple Checklists',
    description: 'Break down complex tasks into simple, actionable steps.',
    icon: CheckCircle2,
  },
]

export const FeatureCards = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Everything you need. <br />{' '}
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground mx-auto text-lg">
            We stripped away the complexity of traditional project management tools. Zentra provides
            a pure, focused environment for getting work done.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-card border-border hover:bg-accent transition-colors">
              <CardHeader>
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
