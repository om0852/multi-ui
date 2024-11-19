import React from "react";
import { useToast } from "./ToastContext";
import Toast_1 from "./Toast_1";

let showToastFn: ((toast: React.ReactNode) => void) | null = null;

const toast = {
  init: (callback: (toast: React.ReactNode) => void) => {
    showToastFn = callback;
  },
  success: (message: string) => {
    if (showToastFn) {
      showToastFn(<Toast_1 message={message} />);
    }
  },
  error: (message: string) => {
    if (showToastFn) {
      showToastFn(<Toast_1 message={message} />);
    }
  },
};

export default toast;
