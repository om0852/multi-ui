"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
  SetStateAction,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// Context
interface CarouselContextProps {
  currentIndex: number;
  setIndex: (index: number, dir: number) => void;
  itemsCount: number;
  loop: boolean;
  setItemsCount: React.Dispatch<React.SetStateAction<number>>; // SetStateAction for itemsCount
  transitioning: boolean;
  setTransitioning: (value: boolean) => void;
  direction: number; // Determines slide direction
}

const CarouselContext = createContext<CarouselContextProps | undefined>(
  undefined
);

// Carousel Component
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
  const [direction, setDirection] = useState(1);
  const [itemsCount, setItemsCount] = useState(React.Children.count(children));
  // Positive for forward, negative for backward
  // let itemsCount = ;
  // Auto-slide interval
  useEffect(() => {
    if (interval && itemsCount > 1) {
      const timer = setInterval(() => {
        if (!transitioning) {
          setDirection(1);
          setCurrentIndex((prev) =>
            loop ? (prev + 1) % itemsCount : Math.min(prev + 1, itemsCount - 1)
          );
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [interval, itemsCount, loop, transitioning]);

  const setIndex = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrentIndex(
        loop
          ? (index + itemsCount) % itemsCount
          : Math.max(0, Math.min(index, itemsCount - 1))
      );
    },
    [itemsCount, loop]
  );

  return (
    <CarouselContext.Provider
      value={{
        currentIndex,
        setIndex,
        itemsCount,
        loop,
        transitioning,
        setItemsCount,
        setTransitioning,
        direction,
      }}
    >
      <div className={`relative overflow-hidden ${className}`}>{children}</div>
    </CarouselContext.Provider>
  );
}

// Carousel Content
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

  const { currentIndex, direction, setItemsCount } = context;
  useEffect(() => {
    setItemsCount(React.Children.count(children));
  }, [children, setItemsCount]); // Re-run whenever children change

  // Define animation variants
  const slideVariants = [
    {
      enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
      center: { x: 0 },
      exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
    },
    {
      enter: (dir: number) => ({ opacity: 0, scale: 0.8 }),
      center: { opacity: 1, scale: 1 },
      exit: (dir: number) => ({ opacity: 0, scale: 0.8 }),
    },
    // Add more custom variants as needed
  ];

  // const selectedEffect = slideVariants[Math.min(transitionEffect, slideVariants.length - 1)];
  const selectedEffect =
    slideVariants[Math.min(transitionEffect, slideVariants.length - 1)];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        {React.Children.map(children, (child, index) => {
          // Render all slides with AnimatePresence and only hide those that are not in view
          return (
            <motion.div
              key={index}
              className="absolute w-full h-full"
              variants={selectedEffect}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{ duration: 0.8 }}
              style={{
                display: currentIndex === index ? "block" : "none", // Only show the current slide
              }}
            >
              {child}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

// Carousel Item
interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

export function CarouselItem({ children, className = "" }: CarouselItemProps) {
  return <div className={`w-full h-full ${className}`}>{children}</div>;
}

// Carousel Dots
interface CarouselDotsProps {
  className?: string;
  dotClassName?: string;
  activeDotClassName?: string;
}
export function CarouselDots({
  className = "",
  dotClassName = "w-3 h-3 rounded-full bg-gray-300 mx-1",
  activeDotClassName = "bg-blue-500",
}: CarouselDotsProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselDots must be used within a Carousel");
  }

  const {
    currentIndex,
    setIndex,
    itemsCount,
    transitioning,
    setTransitioning,
  } = context;

  const handleDotClick = (index: number) => {
    if (transitioning || currentIndex === index) return;
    setTransitioning(true);
    setIndex(index, index > currentIndex ? 1 : -1);
    setTimeout(() => setTransitioning(false), 800);
  };

  return (
    <div className={clsx("flex justify-center mt-4", className)}>
      {Array.from({ length: itemsCount }).map((_, index) => (
        <button
          key={index}
          className={clsx(
            dotClassName,
            currentIndex === index && activeDotClassName // Conditionally add activeDotClassName
          )}
          onClick={() => handleDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

// Carousel Navigation Buttons
interface CarouselControlProps {
  className?: string;
  children?: ReactNode;
}

export function CarouselNext({
  className = "",
  children,
}: CarouselControlProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselNext must be used within a Carousel");
  }

  const {
    currentIndex,
    setIndex,
    itemsCount,
    loop,
    transitioning,
    setTransitioning,
  } = context;
  console.log(itemsCount, "om");
  const handleClick = () => {
    if (transitioning) return;
    setTransitioning(true);
    setIndex(
      loop
        ? (currentIndex + 1) % itemsCount
        : Math.min(currentIndex + 1, itemsCount - 1),
      1
    );
    setTimeout(() => setTransitioning(false), 800);
  };

  return (
    <button
      className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 ${className}`}
      onClick={handleClick}
      disabled={transitioning}
    >
      {children || "Next"}
    </button>
  );
}

export function CarouselPrevious({
  className = "",
  children,
}: CarouselControlProps) {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("CarouselPrevious must be used within a Carousel");
  }

  const {
    currentIndex,
    setIndex,
    itemsCount,
    loop,
    transitioning,
    setTransitioning,
  } = context;

  const handleClick = () => {
    if (transitioning) return;
    setTransitioning(true);
    setIndex(
      loop
        ? (currentIndex - 1 + itemsCount) % itemsCount
        : Math.max(currentIndex - 1, 0),
      -1
    );
    setTimeout(() => setTransitioning(false), 800);
  };

  return (
    <button
      className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ${className}`}
      onClick={handleClick}
      disabled={transitioning}
    >
      {children || "Previous"}
    </button>
  );
}
