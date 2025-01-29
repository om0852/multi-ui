"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel117Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
}

const Carousel117 = ({
  children,
  autoPlay = false,
  interval = 3000,
}: Carousel117Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [ripplePosition, setRipplePosition] = useState({ x: 50, y: 50 })

  const nextSlide = useCallback(() => {
    setRipplePosition({ x: 100, y: 50 })
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      )
    }, 300)
  }, [children.length])

  const prevSlide = () => {
    setRipplePosition({ x: 0, y: 50 })
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? children.length - 1 : prevIndex - 1
      )
    }, 300)
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-emerald-900 to-teal-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ clipPath: `circle(0% at ${ripplePosition.x}% ${ripplePosition.y}%)` }}
            animate={{ 
              clipPath: `circle(150% at ${ripplePosition.x}% ${ripplePosition.y}%)`,
              transition: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            exit={{ 
              clipPath: `circle(0% at ${ripplePosition.x}% ${ripplePosition.y}%)`,
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          >
            {/* Content Container */}
            <div className="relative w-full h-full">
              {children[currentIndex]}

              {/* Ripple Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

              {/* Water Ripples */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    border: "2px solid rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                  }}
                  animate={{
                    scale: [1, 2],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-white text-center max-w-2xl px-8">
                  <motion.h2
                    className="text-5xl font-bold mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    Slide {currentIndex + 1}
                  </motion.h2>
                  <motion.div
                    className="h-1 w-24 bg-white/50 mx-auto mb-4 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7 }}
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
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
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
              setRipplePosition({ x: 50, y: 100 })
              setTimeout(() => setCurrentIndex(index), 300)
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

      {/* Water Effect Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CiAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')",
          opacity: 0.3,
        }}
        animate={{
          backgroundPosition: ["0px 0px", "30px 30px"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

export default Carousel117 