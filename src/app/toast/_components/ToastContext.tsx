import React, { createContext, useContext, useState, ReactNode } from "react";
import ToastContainer from "./ToastContainer";

type ToastComponent = React.ReactNode;

interface ToastContextProps {
  showToast: (toast: ToastComponent) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastComponent | null>(null);

  const showToast = (toastComponent: ToastComponent) => {
    setToast(toastComponent);
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer>
        {toast && React.cloneElement(toast as React.ReactElement, { onClose: closeToast })}
      </ToastContainer>
    </ToastContext.Provider>
  );
};
