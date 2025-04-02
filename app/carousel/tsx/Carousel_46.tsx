"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel46Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  splashCount?: number
  splashSize?: number
}

const Carousel46 = ({
  children,
  autoPlay = false,
  interval = 3000,
  splashCount = 8,
  splashSize = 1,
}: Carousel46Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [splashes, setSplashes] = useState<Array<{ id: number; x: number; y: number; scale: number; rotation: number }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateSplashes()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateSplashes()
  }

  const generateSplashes = () => {
    const newSplashes = Array.from({ length: splashCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: (Math.random() * 0.5 + 0.5) * splashSize,
      rotation: Math.random() * 360,
    }))
    setSplashes(newSplashes)
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
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={`${splash.id}-${currentIndex}`}
            className="absolute w-32 h-32 pointer-events-none"
            style={{
              left: `${splash.x}%`,
              top: `${splash.y}%`,
              transform: `translate(-50%, -50%) rotate(${splash.rotation}deg)`,
            }}
            initial={{
              opacity: 1,
              scale: 0,
            }}
            animate={{
              opacity: 0,
              scale: splash.scale,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
                clipPath: "polygon(50% 0%, 80% 30%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)",
              }}
            />
          </motion.div>
        ))}
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
    </div>
  )
}

export default Carousel46 