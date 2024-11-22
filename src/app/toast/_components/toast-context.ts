import React, { createContext, useContext } from "react";

export type ToastProps = {
  message: string | React.ReactNode;
  close: () => void;
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
  animationType?:
    | "slide"
    | "fade"
    | "zoom"
    | "bounce"
    | "zoomflip"
    | "PopOutIn"
    | "rotate"
    | "wobble"
    | "flip"
    | "staggeredZoom"
    | "drop"
    | "pulse"
    | "ripple"
    | "roll"
    | "twist";
  autoDismiss?: boolean;
  stack: boolean;
  onHoverPause?: boolean;
  actionButton?: { label: string; onClick: () => void };
};

type ToastContextValue = {
  open?: (toast: ToastProps) => void;
  success?: (message: string) => void;
  error?: (message: string) => void;
  close?: (id: number) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }

  return context;
};
