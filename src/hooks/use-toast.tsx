import * as React from "react";

type ToastItem = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

type UseToastReturn = {
  toasts: ToastItem[];
  push: (t: Omit<ToastItem, "id">) => string;
  remove: (id: string) => void;
};

const ToastContext = React.createContext<UseToastReturn | null>(null);

export const ToastProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const push = (t: Omit<ToastItem, "id">) => {
    const id = crypto.randomUUID();
    setToasts((s) => [{ id, ...t }, ...s]);
    return id;
  };

  const remove = (id: string) => setToasts((s) => s.filter((t) => t.id !== id));

  return <ToastContext.Provider value={{ toasts, push, remove }}>{children}</ToastContext.Provider>;
};

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}

export const toast = {
  info: (t: Omit<ToastItem, "id">) => {
    console.info(t);
  },
};

export default useToast;
