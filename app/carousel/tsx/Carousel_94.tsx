"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel94Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  rippleCount?: number
  quantumSpeed?: number
}

const Carousel94 = ({
  children,
  autoPlay = false,
  interval = 3000,
  rippleCount = 5,
  quantumSpeed = 1,
}: Carousel94Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [ripples, setRipples] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    color: string
    delay: number
    probability: number
  }>>([])

  const colors = [
    "rgba(139, 92, 246, 0.6)",  // Purple
    "rgba(124, 58, 237, 0.6)",  // Deep Purple
    "rgba(167, 139, 250, 0.6)", // Light Purple
    "rgba(196, 181, 253, 0.6)", // Pale Purple
  ]

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
      position: {
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
      },
      size: 50 + Math.random() * 150,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.2,
      probability: Math.random(),
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
      className="relative w-full h-[400px] overflow-hidden bg-black"
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
              left: `${ripple.position.x}%`,
              top: `${ripple.position.y}%`,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Quantum Wave */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${ripple.color}`,
                boxShadow: `0 0 20px ${ripple.color}`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0, ripple.probability, 0],
              }}
              transition={{
                duration: 3 / quantumSpeed,
                delay: ripple.delay,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            />

            {/* Probability Cloud */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${ripple.color} 0%, transparent 70%)`,
                filter: "blur(10px)",
                mixBlendMode: "screen",
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0, ripple.probability * 0.5, 0],
              }}
              transition={{
                duration: 2 / quantumSpeed,
                delay: ripple.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Quantum Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ripple.color,
                  boxShadow: `0 0 10px ${ripple.color}`,
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, Math.cos(i * (Math.PI * 2) / 3) * 50, 0],
                  y: [0, Math.sin(i * (Math.PI * 2) / 3) * 50, 0],
                  opacity: [0, ripple.probability, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 / quantumSpeed,
                  delay: ripple.delay + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Background Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(139,92,246,0.1) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
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

export default Carousel94 