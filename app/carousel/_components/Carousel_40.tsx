"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel40Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  smokeIntensity?: number
  smokeSpeed?: number
}

const Carousel40 = ({
  children,
  autoPlay = false,
  interval = 3000,
  smokeIntensity = 1,
  smokeSpeed = 1,
}: Carousel40Props) => {
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
          initial={{ opacity: 0, filter: "blur(50px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 1 / smokeSpeed,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            filter: "blur(50px)",
            transition: {
              duration: 1 / smokeSpeed,
              ease: "easeIn",
            },
          }}
          style={{
            animation: `smoke ${3 / smokeSpeed}s ease-in-out infinite`,
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
        @keyframes smoke {
          0% {
            transform: scale(1) translate(0);
            filter: blur(0px);
          }
          33% {
            transform: scale(${1 + 0.05 * smokeIntensity}) translate(${2 * smokeIntensity}px, ${-2 * smokeIntensity}px);
            filter: blur(${2 * smokeIntensity}px);
          }
          66% {
            transform: scale(${1 - 0.05 * smokeIntensity}) translate(${-2 * smokeIntensity}px, ${2 * smokeIntensity}px);
            filter: blur(${3 * smokeIntensity}px);
          }
          100% {
            transform: scale(1) translate(0);
            filter: blur(0px);
          }
        }
      `}</style>
    </div>
  )
}

export default Carousel40 