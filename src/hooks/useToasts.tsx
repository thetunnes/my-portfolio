import { toast } from 'react-toastify'

export function useToasts() {
  const notifySuccess = (text: string) => toast.success(text)
  const notifyError = (text: string) => toast.error(text)

  return {
    notifyError,
    notifySuccess,
  }
}
