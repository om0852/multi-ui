"use client";

import React, { useMemo, useState } from "react";
import { ToastContext } from "./toast-context";
import { AnimatePresence } from "framer-motion";

type ToastType = {
  id: number;
  message: string | React.ReactNode;
  icon?: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
  theme?: "light" | "dark" | "custom";
  duration?: number;
  animationType?: "slide" | "fade" | "zoom" | "bounce";
  autoDismiss?: boolean;
  onHoverPause?: boolean;
  actionButton?: { label: string; onClick: () => void };
};

type ToastProviderProps = {
  children: React.ReactNode;
  Toast: React.FC<ToastType & { close: () => void }>; // Toast component
};

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  Toast,
}) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  // Open a new toast with full customization options
  const openToast = (toast: Omit<ToastType, "id">) => {
    const newToast = { ...toast, id: Date.now() };
    setToasts((prev) => [...prev, newToast]);
  };

  // Convenience methods for different toast types
  const successToast = (message: string, options?: Omit<ToastType, "id" | "message">) => {
    openToast({
      message,
      icon: "✅",  
      theme: "light",
      position: "top-right",
      animationType: "slide",
      ...options, // Merge user-provided options
    });
  };

  const errorToast = (message: string, options?: Omit<ToastType, "id" | "message">) => {
    openToast({
      message,
      icon: "❌",
      theme: "dark",
      position: "top-right",
      animationType: "fade",
      ...options, // Merge user-provided options
    });
  };

  const warningToast = (message: string, options?: Omit<ToastType, "id" | "message">) => {
    openToast({
      message,
      icon: "⚠️",
      theme: "custom", // A custom theme could be defined for warning
      position: "top-right",
      animationType: "bounce",
      ...options, // Merge user-provided options
    });
  };

  const notifyToast = (message: string, options?: Omit<ToastType, "id" | "message">) => {
    openToast({
      message,
      icon: "ℹ️",
      theme: "light",
      position: "bottom-left",
      animationType: "zoom",
      ...options, // Merge user-provided options
    });
  };

  // Close a specific toast by ID
  const closeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Memoize context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      open: openToast,
      success: successToast,
      error: errorToast,
      warning: warningToast,
      notify: notifyToast,
      close: closeToast,
    }),
    []
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="fixed z-50 p-4 space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              close={() => closeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
