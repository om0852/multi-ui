"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel99Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  particleCount?: number
  quantumSpeed?: number
}

const Carousel99 = ({
  children,
  autoPlay = false,
  interval = 3000,
  particleCount = 40,
  quantumSpeed = 1,
}: Carousel99Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "rgba(6, 182, 212, 0.8)",   // Cyan
    "rgba(167, 139, 250, 0.8)", // Purple
    "rgba(59, 130, 246, 0.8)",  // Blue
    "rgba(236, 72, 153, 0.8)",  // Pink
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
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      size: 2 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.02,
    }))
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
          initial={{ opacity: 0, scale: 1.5 }}
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
            scale: 0.5,
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Quantum Tunnel Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(6,182,212,0.2) 0%, transparent 70%)",
          filter: "blur(20px)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3 / quantumSpeed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Quantum Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={`${particle.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              left: `${particle.position.x}%`,
              top: `${particle.position.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              boxShadow: `0 0 10px ${particle.color}`,
              filter: "blur(1px)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 2 / quantumSpeed,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Quantum Waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: "2px solid rgba(6,182,212,0.3)",
            borderRadius: "50%",
            transform: `scale(${1 + i * 0.2})`,
          }}
          animate={{
            scale: [(1 + i * 0.2) * 0.8, (1 + i * 0.2) * 1.2, (1 + i * 0.2) * 0.8],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 / quantumSpeed,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Quantum Energy Field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, rgba(6,182,212,0.1), rgba(167,139,250,0.1))",
          mixBlendMode: "screen",
        }}
        animate={{
          background: [
            "linear-gradient(45deg, rgba(6,182,212,0.1), rgba(167,139,250,0.1))",
            "linear-gradient(225deg, rgba(6,182,212,0.1), rgba(167,139,250,0.1))",
            "linear-gradient(45deg, rgba(6,182,212,0.1), rgba(167,139,250,0.1))",
          ],
        }}
        transition={{
          duration: 3 / quantumSpeed,
          repeat: Infinity,
          ease: "linear",
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

export default Carousel99 