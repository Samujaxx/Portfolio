import { useState } from "react"

type ToastProps = {
  title?: string
  description?: string
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  function toast(props: ToastProps) {
    setToasts((prev) => [...prev, props])
  }

  return {
    toast,
    toasts,
  }
}
