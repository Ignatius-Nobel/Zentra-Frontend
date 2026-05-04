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

export const Signup = () => {
  const navigate = useNavigate()
  const { signup, isLoading, error, isAuthenticated, clearError } = useAuthStore()

  const [name, setName] = useState('')
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
      await signup(name, email, password)
    } catch {
      // Error is handled in the store
    }
  }

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="p-3 text-sm text-destructive-foreground bg-destructive/10 rounded-md">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="full-name">Full name</Label>
            <Input
              id="full-name"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="********"
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
            {isLoading ? 'Creating account...' : 'Create account'}
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
