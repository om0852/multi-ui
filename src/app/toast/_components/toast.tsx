"use client";

import React, { useMemo, useState } from "react";
import { ToastContext } from "./toast-context";

type ToastType = {
  id: number;
  message: string;
};

type ToastProviderProps = {
  children: React.ReactNode;
  Toast: React.FC<{ message: string; close: () => void }>; // Toast component
};

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  Toast,
}) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  // Open a new toast
  const openToast = (message: string) => {
    const newToast = {
      id: Date.now(),
      message,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  // Close a specific toast
  const closeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Memoize context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
    }),
    []
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            close={() => closeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
