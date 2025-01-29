"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel113Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
}

const Carousel113 = ({
  children,
  autoPlay = false,
  interval = 3000,
}: Carousel113Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
  }, [children.length])

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <div
      className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-blue-900 to-teal-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Liquid Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${50 + Math.sin(i * 1.5) * 30}% ${
                50 + Math.cos(i * 1.5) * 30
              }%, rgba(255,255,255,0.1), transparent)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 50, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Content Container */}
            <div className="relative w-full h-full">
              {children[currentIndex]}

              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-white text-center max-w-2xl px-8">
                  <motion.h2
                    className="text-5xl font-bold mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Slide {currentIndex + 1}
                  </motion.h2>
                  <motion.div
                    className="h-1 w-24 bg-white/50 mx-auto mb-4 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      className="h-full bg-white"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: interval / 1000,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between px-8 -translate-y-1/2 z-10">
        <motion.button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </motion.button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center items-center gap-4 z-10">
        {children.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className="group relative"
          >
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-12 bg-white" : "w-3 bg-white/40"
              }`}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-white/30 blur-md"
                layoutId="activeIndicator"
                transition={{ type: "spring", bounce: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default Carousel113 