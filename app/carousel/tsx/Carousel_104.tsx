"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel104Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  rotationSpeed?: number
}

const Carousel104 = ({
  children,
  autoPlay = false,
  interval = 3000,
  rotationSpeed = 1,
}: Carousel104Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [rotationDirection, setRotationDirection] = useState<"left" | "right">("right")

  const nextSlide = useCallback(() => {
    setRotationDirection("right")
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
  }, [children.length])

  const prevSlide = () => {
    setRotationDirection("left")
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setRotationDirection(index > currentIndex ? "right" : "left")
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      style={{ perspective: "1500px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
            initial={{
              rotateY: rotationDirection === "right" ? 90 : -90,
              opacity: 0,
            }}
            animate={{
              rotateY: 0,
              opacity: 1,
              transition: {
                duration: 0.8 / rotationSpeed,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            exit={{
              rotateY: rotationDirection === "right" ? -90 : 90,
              opacity: 0,
              transition: {
                duration: 0.8 / rotationSpeed,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {children[currentIndex]}
            </div>

            {/* 3D Side Panels */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                style={{
                  transform: `rotateY(${i * 90}deg) translateZ(200px)`,
                  backfaceVisibility: "hidden",
                }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between items-center px-4 -translate-y-1/2 z-10">
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </motion.button>
      </div>

      {/* 3D Pagination */}
      <div className="absolute bottom-6 inset-x-0 z-10">
        <div className="flex justify-center items-center gap-3">
          {children.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              whileHover={{ scale: 1.2, z: 20 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-white/30 group-hover:bg-white/50"
                }`}
              />
              {currentIndex === index && (
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-white/50"
                  layoutId="activePagination"
                  style={{ transform: "translateZ(10px)" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Ambient Light Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  )
}

export default Carousel104 