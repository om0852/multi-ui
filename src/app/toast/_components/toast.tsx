"use client";

import React, { useMemo, useState, useCallback } from "react";
import { ToastContext } from "./toast-context";
import { AnimatePresence } from "framer-motion";
import { positionClasses } from "./utils";

type ToastType = {
  id: number;
  message: string | React.ReactNode;
  icon?: React.ReactNode;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "center";
  theme?:
    | "light"
    | "dark"
    | "custom"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "neutral"
    | "vibrant"
    | "pink"
    | "cyan"
    | "teal"; // Extended themes
  duration?: number;
  animationType?: "slide" | "fade" | "zoom" | "bounce";
  autoDismiss?: boolean;
  onHoverPause?: boolean;
  actionButton?: { label: string; onClick: () => void };
};

type ToastProviderProps = {
  children: React.ReactNode;
  Toast: React.FC<ToastType & { close: () => void; stack: boolean }>;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "center";
  stack?: boolean;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  Toast,
  position = "top-right",
  stack = true,
}) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  // Memoized function to open a new toast
  const openToast = useCallback(
    (toast: Omit<ToastType, "id">) => {
      const newToast = { ...toast, id: Date.now() };
      setToasts((prev) => [...prev, newToast]);
    },
    [] // Stable reference
  );

  // Convenience methods
  const successToast = useCallback(
    (message: string, options?: Omit<ToastType, "id" | "message">) => {
      openToast({
        message,
        icon: "✅",
        theme: "light",
        position,
        animationType: "slide",
        autoDismiss:true,
        ...options,
      });
    },
    [position, openToast] // Stable reference
  );

  const errorToast = useCallback(
    (message: string, options?: Omit<ToastType, "id" | "message">) => {
      openToast({
        message,
        icon: "❌",
        theme: "danger",
        position,
        autoDismiss:true,
        animationType: "fade",
        ...options,
      });
    },
    [position, openToast] // Stable reference
  );

  const closeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // Memoize the context value
  const contextValue = useMemo(
    () => ({
      open: openToast,
      success: successToast,
      error: errorToast,
      close: closeToast,
    }),
    [openToast, successToast, errorToast, closeToast]
  );

  // Memoize the Toast component
  const MemoizedToast = useMemo(() => React.memo(Toast), [Toast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div
        className={`fixed z-50 p-4 ${stack ? "flex flex-col gap-4" : "block"} ${
          positionClasses[position]
        }`}
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <MemoizedToast
              key={toast.id}
              {...toast}
              close={() => closeToast(toast.id)}
              stack={stack} // Pass the stable stack value
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
