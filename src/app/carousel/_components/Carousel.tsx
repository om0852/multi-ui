"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Context
interface CarouselContextProps {
  currentIndex: number;
  setIndex: (index: number) => void;
  itemsCount: number;
  loop?: boolean;
  transitioning: boolean;
  setTransitioning: (value: boolean) => void;
}

const CarouselContext = createContext<CarouselContextProps | undefined>(undefined);

// Carousel Props
interface CarouselProps {
  children: ReactNode;
  interval?: number;
  loop?: boolean;
  className?: string;
}

export function Carousel({
  children,
  interval = 5000,
  loop = false,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const itemsCount = React.Children.count(children);

  // Automatic slide transition with interval (only if loop is true)
  useEffect(() => {
    if (loop && interval) {
      const timer = setInterval(() => {
        if (!transitioning) {
          setCurrentIndex((prev) => (prev + 1) % itemsCount);
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [interval, itemsCount, loop, transitioning]);

  // Function to set the index manually (without loop)
  const setIndex = (index: number) => {
    if (loop) {
      setCurrentIndex((index + itemsCount) % itemsCount); // Wrap around if looping
    } else {
      setCurrentIndex(Math.max(0, Math.min(index, itemsCount - 1))); // Bound index to range
    }
  };

  return (
    <CarouselContext.Provider
      value={{ currentIndex, setIndex, itemsCount, loop, transitioning, setTransitioning }}
    >
      <div className={`relative overflow-hidden ${className}`}>{children}</div>
    </CarouselContext.Provider>
  );
}

// CarouselContent with Tailwind CSS and Fade Animation
interface CarouselContentProps {
  children: ReactNode;
  className?: string;
  transitionEffect?: number;
}

export function CarouselContent({
  children,
  className = "",
  transitionEffect = 0,
}: CarouselContentProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselContent must be used within a Carousel");
  }

  const { currentIndex } = context;

  // Define animation variants
  const slideVariants = [
    { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "-100%" } },
    { initial: { x: "-100%" }, animate: { x: 0 }, exit: { x: "100%" } },
    { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "-100%" } },
    { initial: { y: "-100%" }, animate: { y: 0 }, exit: { y: "100%" } },
    { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 } },
    { initial: { rotate: -15, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 15, opacity: 0 } },
    { initial: { x: "100%", opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: "-100%", opacity: 0 } },
    { initial: { y: "-100%", scale: 0.8 }, animate: { y: 0, scale: 1 }, exit: { y: "100%", scale: 0.8 } },
    { initial: { scaleX: 0, opacity: 0 }, animate: { scaleX: 1, opacity: 1 }, exit: { scaleX: 0, opacity: 0 } },
    { initial: { x: "100vw", y: "100vh" }, animate: { x: 0, y: 0 }, exit: { x: "-100vw", y: "-100vh" } },
  ];

  const selectedEffect = slideVariants[Math.max(0, Math.min(transitionEffect, slideVariants.length - 1))];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <AnimatePresence initial={false}>
        {React.Children.map(children, (child, index) =>
          currentIndex === index ? (
            <motion.div
              key={index}
              className="absolute w-full h-full"
              initial={selectedEffect.initial}
              animate={selectedEffect.animate}
              exit={selectedEffect.exit}
              transition={{ duration: 0.8 }}
            >
              {child}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}

// CarouselItem Props
interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

export function CarouselItem({ children, className = "" }: CarouselItemProps) {
  return <div className={`h-full ${className}`}>{children}</div>;
}

// CarouselNext and Previous Props
interface CarouselControlProps {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

// Next Button
export function CarouselNext({ onClick, className = "", children }: CarouselControlProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselNext must be used within a Carousel");
  }

  const { currentIndex, setIndex, itemsCount, loop, transitioning, setTransitioning } = context;
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (transitioning || isDisabled) return;

    setIsDisabled(true);
    setTransitioning(true);

    setIndex(loop ? (currentIndex + 1) % itemsCount : Math.min(currentIndex + 1, itemsCount - 1));
    if (onClick) onClick();

    setTimeout(() => {
      setIsDisabled(false);
    }, 500);

    setTimeout(() => {
      setTransitioning(false);
    }, 800);
  };

  return (
    <button
      className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 ${className} bg-gray-800 text-white p-2 rounded-full`}
      onClick={handleClick}
      disabled={isDisabled || transitioning}
    >
      {children || "Next"}
    </button>
  );
}

// Previous Button
export function CarouselPrevious({ onClick, className = "", children }: CarouselControlProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselPrevious must be used within a Carousel");
  }

  const { currentIndex, setIndex, itemsCount, loop, transitioning, setTransitioning } = context;
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = useCallback(() => {
    if (transitioning || isDisabled) return;

    setIsDisabled(true);
    setTransitioning(true);

    setIndex(loop ? (currentIndex - 1 + itemsCount) % itemsCount : Math.max(currentIndex - 1, 0));
    if (onClick) onClick();

    setTimeout(() => {
      setIsDisabled(false);
    }, 500);

    setTimeout(() => {
      setTransitioning(false);
    }, 800);
  }, [currentIndex, setIndex, transitioning, isDisabled, itemsCount, loop, onClick]);

  return (
    <button
      className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ${className} bg-gray-800 text-white p-2 rounded-full`}
      onClick={handleClick}
      disabled={isDisabled || transitioning}
    >
      {children || "Previous"}
    </button>
  );
}
