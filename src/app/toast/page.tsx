"use client"
import React, { useEffect } from "react";
import toast from "./_components/toast";
import { ToastProvider, useToast } from "./_components/ToastContext";
import Test from "./Test";

const Page: React.FC = () => {

  return (
      <ToastProvider>
    <Test />
  </ToastProvider>
      
  );
};

export default Page