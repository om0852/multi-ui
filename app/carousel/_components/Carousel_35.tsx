"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel35Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  morphIntensity?: number
  flowSpeed?: number
}

const Carousel35 = ({
  children,
  autoPlay = false,
  interval = 3000,
  morphIntensity = 1,
  flowSpeed = 1,
}: Carousel35Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

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

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          }}
          style={{
            animation: `liquidFlow ${5 / flowSpeed}s ease-in-out infinite`,
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors z-10"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors z-10"
      >
        →
      </button>

      <style jsx global>{`
        @keyframes liquidFlow {
          0% {
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
            transform: scale(${1 - 0.05 * morphIntensity});
          }
          50% {
            border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
            transform: scale(${1 + 0.05 * morphIntensity});
          }
          100% {
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
            transform: scale(${1 - 0.05 * morphIntensity});
          }
        }
      `}</style>
    </div>
  )
}

export default Carousel35 