"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel66Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  rippleCount?: number
  waveSpeed?: number
}

const Carousel66 = ({
  children,
  autoPlay = false,
  interval = 3000,
  rippleCount = 3,
  waveSpeed = 1,
}: Carousel66Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [ripples, setRipples] = useState<Array<{
    id: number
    x: number
    y: number
    delay: number
    scale: number
  }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateRipples()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateRipples()
  }

  const generateRipples = () => {
    const newRipples = Array.from({ length: rippleCount }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 20,
      y: 50 + (Math.random() - 0.5) * 20,
      delay: i * 0.2,
      scale: 0.8 + Math.random() * 0.4,
    }))
    setRipples(newRipples)
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
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
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
        {ripples.map((ripple) => (
          <motion.div
            key={`${ripple.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              width: "400px",
              height: "400px",
              transform: "translate(-50%, -50%)",
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, ripple.scale * 2],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2 / waveSpeed,
              delay: ripple.delay,
              ease: "easeOut",
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                border: "2px solid rgba(255,255,255,0.3)",
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 100%)",
        }}
      />

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

export default Carousel66 