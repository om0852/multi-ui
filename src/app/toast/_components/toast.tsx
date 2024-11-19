"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./toast.css";
import { ToastContext } from "./toast-context";
import { useTime } from "framer-motion";
import { Toast } from "./Toast_1";


type ToastProviderProperties = {
  children: React.ReactElement;
};
type ToastType = {
  message: string;
  id: number;
};
export function ToastProvider({ children }: ToastProviderProperties) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function openToast(message: string) {
    console.log(message);
    const newToast = {
      id: Date.now(),
      message: message,
    };
    setToasts((prev) => [...prev, newToast]);
  }
  function closeToast(id: number) {
    setToasts((prev) => prev.filter((toast) => toast.id != id));
  }

  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
    }),
    []
  );

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
        <div className="toasts">
          {toasts &&
            toasts.map((toast) => {
              return (
                <Toast
                  key={toast.id}
                  message={toast.message}
                  close={() => closeToast(toast.id)}
                />
              );
            })}
        </div>
      </ToastContext.Provider>
    </>
  );
}
