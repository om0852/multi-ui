"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel84Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  particleCount?: number
  fusionSpeed?: number
}

const Carousel84 = ({
  children,
  autoPlay = false,
  interval = 3000,
  particleCount = 20,
  fusionSpeed = 1,
}: Carousel84Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    startPosition: { x: number; y: number }
    endPosition: { x: number; y: number }
    size: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "rgba(64, 156, 255, 0.6)",
    "rgba(128, 206, 255, 0.6)",
    "rgba(200, 255, 255, 0.6)",
    "rgba(255, 255, 255, 0.6)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateParticles()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateParticles()
  }

  const generateParticles = () => {
    const centerX = 50
    const centerY = 50
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      const angle = (Math.PI * 2 * i) / particleCount
      const radius = 30 + Math.random() * 20
      return {
        id: i,
        startPosition: {
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
        },
        endPosition: {
          x: centerX,
          y: centerY,
        },
        size: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: i * 0.05,
      }
    })
    setParticles(newParticles)
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
        {particles.map((particle) => (
          <motion.div
            key={`${particle.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              filter: "blur(1px)",
              mixBlendMode: "screen",
            }}
            initial={{
              x: `${particle.startPosition.x}%`,
              y: `${particle.startPosition.y}%`,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: [
                `${particle.startPosition.x}%`,
                `${particle.endPosition.x}%`,
                `${particle.startPosition.x}%`,
              ],
              y: [
                `${particle.startPosition.y}%`,
                `${particle.endPosition.y}%`,
                `${particle.startPosition.y}%`,
              ],
              scale: [0, 1, 2, 1, 0],
              opacity: [0, 1, 0.8, 1, 0],
            }}
            transition={{
              duration: 3 / fusionSpeed,
              delay: particle.delay,
              ease: "easeInOut",
              times: [0, 0.4, 0.5, 0.6, 1],
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(64,156,255,0.1) 0%, transparent 70%)",
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

export default Carousel84 
