"use client";
import React from "react";
import { useToast } from "./_components/toast-context";

const Page = () => {
  const toast = useToast();

  return (
      <button className="w-[20vh] h-10 bg-red-600"  onClick={()=>toast?.open("this is a toast message!")}>toast</button>
  );
};

export default Page;
