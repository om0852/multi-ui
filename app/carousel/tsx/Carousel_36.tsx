"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel36Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  glitchIntensity?: number
  glitchFrequency?: number
}

const Carousel36 = ({
  children,
  autoPlay = false,
  interval = 3000,
  glitchIntensity = 1,
  glitchFrequency = 1,
}: Carousel36Props) => {
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
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            x: 20,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          style={{
            animation: `glitch ${0.5 / glitchFrequency}s ease-in-out infinite`,
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
        @keyframes glitch {
          0% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
          10% {
            transform: translate(${-5 * glitchIntensity}px, ${2 * glitchIntensity}px);
            filter: hue-rotate(${45 * glitchIntensity}deg);
          }
          20% {
            transform: translate(${5 * glitchIntensity}px, ${-2 * glitchIntensity}px);
            filter: hue-rotate(${-45 * glitchIntensity}deg);
          }
          30% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
          100% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Carousel36 