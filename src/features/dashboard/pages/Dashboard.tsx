import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store/useAuthStore'
export const Dashboard = () => {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Dashboard</h1>
      <Button
        variant="ghost"
        onClick={() => {
          logout()
          navigate('/')
        }}
        className="text-foreground hover:bg-muted"
      >
        Log out
      </Button>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card/50 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>System statistics and performance at a glance.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Welcome Back!</div>
            <p className="text-sm text-muted-foreground mt-2">
              Your dashboard is ready. Start managing your projects and tasks effectively.
            </p>
          </CardContent>
        </Card>

        {/* Placeholder cards */}
        <Card className="bg-card/50 backdrop-blur-sm border-border opacity-50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Track your latest actions and updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm italic">Coming soon...</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border opacity-50">
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Monitor the progress of your active projects.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm italic">Coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
