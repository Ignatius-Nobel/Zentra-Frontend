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
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold tracking-tight text-center">
          Create an account
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="full-name">Full name</Label>
            <Input id="full-name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="name@company.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="********" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Create account
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 border-t border-border mt-4 pt-4 text-center text-sm text-muted-foreground">
        <div>
          By clicking continue, you agree to our{' '}
          <a
            href="/terms"
            className="text-primary font-medium hover:underline hover:text-primary/90"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            className="text-primary font-medium hover:underline hover:text-primary/90"
          >
            Privacy Policy
          </a>
          .
        </div>
        <div className="mt-2">
          Already have an account?{' '}
          <Link
            to="/signin"
            className="text-primary font-medium hover:underline hover:text-primary/90"
          >
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
