"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel44Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  refractionStrength?: number
  colorShift?: number
}

const Carousel44 = ({
  children,
  autoPlay = false,
  interval = 3000,
  refractionStrength = 1,
  colorShift = 1,
}: Carousel44Props) => {
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
          initial={{ 
            opacity: 0,
            scale: 1.2,
            filter: `hue-rotate(${90 * colorShift}deg) blur(10px)`
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "hue-rotate(0deg) blur(0px)",
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            filter: `hue-rotate(${-90 * colorShift}deg) blur(10px)`,
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
          }}
          style={{
            animation: `prismRefraction ${3}s ease-in-out infinite`,
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 mix-blend-screen"
          style={{
            background: `linear-gradient(45deg, 
              rgba(255,0,0,${0.1 * refractionStrength}),
              rgba(0,255,0,${0.1 * refractionStrength}),
              rgba(0,0,255,${0.1 * refractionStrength})
            )`,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

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
        @keyframes prismRefraction {
          0% {
            transform: scale(1) skew(0deg);
          }
          25% {
            transform: scale(${1 + 0.05 * refractionStrength}) skew(${2 * refractionStrength}deg);
          }
          75% {
            transform: scale(${1 - 0.05 * refractionStrength}) skew(${-2 * refractionStrength}deg);
          }
          100% {
            transform: scale(1) skew(0deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Carousel44 