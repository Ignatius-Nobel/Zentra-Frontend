import { useState, useEffect, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
import { useAuthStore } from '../store/useAuthStore'

export const Login = () => {
  const navigate = useNavigate()
  const { login, isLoading, error, isAuthenticated, clearError } = useAuthStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    return () => clearError() // Clear error on unmount
  }, [clearError])

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard') // Or to a dashboard layout route
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch {
      // Error is handled in the store and displayed below
    }
  }

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="p-3 text-sm text-destructive-foreground bg-destructive/10 rounded-md">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
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
          <Button
            variant="outline"
            className="w-full border-border text-foreground hover:bg-muted"
            disabled={isLoading}
          >
            Google
          </Button>
          <Button
            variant="outline"
            className="w-full border-border text-foreground hover:bg-muted"
            disabled={isLoading}
          >
            GitHub
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 border-t border-border mt-4 pt-4 text-center text-sm text-muted-foreground">
        <div>
          Don&apos;t have an account?{' '}
          <Link
            to="/signup"
            className="text-primary font-medium hover:underline hover:text-primary/90"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
