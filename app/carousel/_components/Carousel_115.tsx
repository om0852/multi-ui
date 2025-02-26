"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel115Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
}

const Carousel115 = ({
  children,
  autoPlay = false,
  interval = 3000,
}: Carousel115Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)

  const nextSlide = useCallback(() => {
    setIsGlitching(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      )
      setTimeout(() => setIsGlitching(false), 150)
    }, 150)
  }, [children.length])

  const prevSlide = () => {
    setIsGlitching(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? children.length - 1 : prevIndex - 1
      )
      setTimeout(() => setIsGlitching(false), 150)
    }, 150)
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[600px] overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glitch Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Content Container */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0">
                {children[currentIndex]}
              </div>

              {/* Glitch Effects */}
              {isGlitching && (
                <>
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "linear-gradient(transparent 0%, rgba(255,0,0,0.2) 50%, transparent 100%)",
                      mixBlendMode: "color",
                    }}
                    animate={{
                      y: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 0.2,
                      repeat: 2,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "linear-gradient(transparent 0%, rgba(0,255,255,0.2) 50%, transparent 100%)",
                      mixBlendMode: "color",
                    }}
                    animate={{
                      y: ["100%", "-100%"],
                    }}
                    transition={{
                      duration: 0.2,
                      repeat: 2,
                      ease: "linear",
                    }}
                  />
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 bg-white"
                      style={{
                        clipPath: "inset(0 0 0 0)",
                        mixBlendMode: "overlay",
                      }}
                      animate={{
                        clipPath: [
                          "inset(0 0 100% 0)",
                          "inset(0 0 0 0)",
                          "inset(100% 0 0 0)",
                        ],
                        x: [
                          `${Math.random() * 10 - 5}px`,
                          "0px",
                          `${Math.random() * 10 - 5}px`,
                        ],
                      }}
                      transition={{
                        duration: 0.2,
                        times: [0, 0.5, 1],
                        repeat: 1,
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </>
              )}

              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-white text-center max-w-2xl px-8">
                  <motion.h2
                    className="text-5xl font-bold mb-4 glitch-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                      textShadow: isGlitching
                        ? "2px 0 #ff0000, -2px 0 #00ff00"
                        : "none",
                    }}
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
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255,255,255,0.2)",
            textShadow: "2px 0 #ff0000, -2px 0 #00ff00",
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
            textShadow: "2px 0 #ff0000, -2px 0 #00ff00",
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
              setIsGlitching(true)
              setTimeout(() => {
                setCurrentIndex(index)
                setTimeout(() => setIsGlitching(false), 150)
              }, 150)
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
                style={{
                  boxShadow: isGlitching
                    ? "2px 0 #ff0000, -2px 0 #00ff00"
                    : "none",
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10"
        style={{
          backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVfJ92AAAACHRSTlMAAAAAAAAAAPxJLX8AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAaSURBVDjLY2hgQABGJGYYNXDUwFEDRw0cYAYCAEgAA/6qbZXrAAAAAElFTkSuQmCC')",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  )
}

export default Carousel115