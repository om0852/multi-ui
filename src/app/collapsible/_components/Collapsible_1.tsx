"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

type CollapsibleProps = {
  children: React.ReactNode;
};

type CollapsibleTriggerProps = {
  children: React.ReactNode;
  onClick: () => void;
};

type CollapsibleContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export function Collapsible({ children }: CollapsibleProps) {
  return <div className="w-full max-w-md mx-auto">{children}</div>;
}

export function CollapsibleTrigger({ children, onClick }: CollapsibleTriggerProps) {
  return (
    <button
      className="w-full text-left bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function CollapsibleContent({ children, isOpen }: CollapsibleContentProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="py-2 px-4 bg-gray-100 rounded-lg">{children}</div>
    </motion.div>
  );
}

// Example Usage
export function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible>
      <CollapsibleTrigger onClick={() => setIsOpen(!isOpen)}>
        Can I use this in my project?
      </CollapsibleTrigger>
      <CollapsibleContent isOpen={isOpen}>
        Yes. Free to use for personal and commercial projects. No attribution required.
      </CollapsibleContent>
    </Collapsible>
  );
}
