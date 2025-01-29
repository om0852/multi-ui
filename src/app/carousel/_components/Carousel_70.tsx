"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel70Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  particleCount?: number
  tunnelSpeed?: number
}

const Carousel70 = ({
  children,
  autoPlay = false,
  interval = 3000,
  particleCount = 30,
  tunnelSpeed = 1,
}: Carousel70Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    color: string
    delay: number
    path: number[][]
  }>>([])

  const colors = [
    "rgba(0, 255, 255, 0.6)",
    "rgba(255, 0, 255, 0.6)",
    "rgba(0, 255, 0, 0.6)",
    "rgba(0, 128, 255, 0.6)",
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
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      const controlPoints = Array.from({ length: 3 }, () => [
        Math.random() * 100,
        Math.random() * 100,
      ])
      
      return {
        id: i,
        x: startX,
        y: startY,
        size: 2 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: i * 0.05,
        path: [[startX, startY], ...controlPoints],
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
          initial={{ opacity: 0, scale: 0.8 }}
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
            scale: 1.2,
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
              opacity: 0,
              x: `${particle.path[0][0]}%`,
              y: `${particle.path[0][1]}%`,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              x: particle.path.map(p => `${p[0]}%`),
              y: particle.path.map(p => `${p[1]}%`),
            }}
            transition={{
              duration: 2 / tunnelSpeed,
              delay: particle.delay,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,128,255,0.1) 0%, transparent 70%)",
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

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(0,0,255,0.1) 0%, transparent 100%)",
          mixBlendMode: "screen",
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

export default Carousel70 