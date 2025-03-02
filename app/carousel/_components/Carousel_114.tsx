"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel114Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
}

const Carousel114 = ({
  children,
  autoPlay = false,
  interval = 3000,
}: Carousel114Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
  }, [children.length])

  const prevSlide = () => {
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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  return (
    <div
      className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-purple-800 to-indigo-900 perspective-[2000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0.5, y: 0.5 })
      }}
      onMouseMove={handleMouseMove}
    >
      {/* 3D Container */}
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotateX: isHovered ? (mousePosition.y - 0.5) * -20 : 0,
          rotateY: isHovered ? (mousePosition.x - 0.5) * 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              rotateY: 0, 
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            exit={{ 
              opacity: 0, 
              rotateY: -90, 
              scale: 0.8,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            {/* Content Container */}
            <div className="relative w-full h-full preserve-3d">
              {children[currentIndex]}

              {/* 3D Layers */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    transform: `translateZ(${(i + 1) * -50}px)`,
                    backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%)",
                    backgroundSize: `${20 * (i + 1)}px ${20 * (i + 1)}px`,
                    opacity: 0.1 - i * 0.02,
                  }}
                  animate={{
                    backgroundPosition: ["0px 0px", `${20 * (i + 1)}px ${20 * (i + 1)}px`],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, z: -100 }}
                animate={{ opacity: 1, z: 0 }}
                exit={{ opacity: 0, z: -100 }}
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
      </motion.div>

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
            onClick={() => setCurrentIndex(index)}
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

export default Carousel114 
