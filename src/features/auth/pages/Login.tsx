import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'

export const Login = () => {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold tracking-tight text-center">
          Welcome back
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Enter your email to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="name@company.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline hover:text-primary/90"
              >
                Forgot password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sign In
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full border-border text-foreground hover:bg-muted">
            Google
          </Button>
          <Button variant="outline" className="w-full border-border text-foreground hover:bg-muted">
            GitHub
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 border-t border-border mt-4 pt-4 text-center text-sm text-muted-foreground">
        <div>
          Don&apos;t have an account?{' '}
          <a
            href="/signup"
            className="text-primary font-medium hover:underline hover:text-primary/90"
          >
            Sign up
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}
