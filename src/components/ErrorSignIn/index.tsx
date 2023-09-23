'use client'
import { toast } from '../ui/use-toast'

export const errors = {
  Signin: 'Try signing with a different account.',
  OAuthSignin: 'Try signing with a different account.',
  OAuthCallback: 'Try signing with a different account.',
  OAuthCreateAccount: 'Try signing with a different account.',
  EmailCreateAccount: 'Try signing with a different account.',
  Callback: 'Try signing with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
}

export type ErrorKey = keyof typeof errors

interface Props {
  error: ErrorKey
}

export function ErrorSignIn({ error }: Props) {
  const errorMessage = error && (errors[error] ?? errors.default)

  toast({
    title: 'Problema ao logar',
    description: errorMessage,
  })

  return null
}
