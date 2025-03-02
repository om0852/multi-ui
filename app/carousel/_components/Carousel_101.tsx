"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel101Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  particlePairs?: number
  entanglementSpeed?: number
}

const Carousel101 = ({
  children,
  autoPlay = false,
  interval = 3000,
  particlePairs = 4,
  entanglementSpeed = 1,
}: Carousel101Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    position: { x: number; y: number }
    pair: number
    color: string
    size: number
    delay: number
  }>>([])

  const colors = [
    "rgba(139, 92, 246, 0.8)",  // Purple
    "rgba(14, 165, 233, 0.8)",  // Cyan
    "rgba(236, 72, 153, 0.8)",  // Pink
    "rgba(34, 197, 94, 0.8)",   // Green
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
    const newParticles = []
    for (let i = 0; i < particlePairs; i++) {
      const color = colors[i % colors.length]
      const delay = i * 0.2
      const size = 4 + Math.random() * 4

      // First particle in pair
      newParticles.push({
        id: i * 2,
        position: {
          x: 30 + Math.random() * 20,
          y: 30 + Math.random() * 40,
        },
        pair: i,
        color,
        size,
        delay,
      })

      // Second particle in pair (entangled)
      newParticles.push({
        id: i * 2 + 1,
        position: {
          x: 50 + Math.random() * 20,
          y: 30 + Math.random() * 40,
        },
        pair: i,
        color,
        size,
        delay,
      })
    }
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

      {/* Quantum Field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(139,92,246,0.1) 0%, transparent 70%)",
          filter: "blur(20px)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3 / entanglementSpeed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Entangled Particles */}
      <AnimatePresence>
        {particles.map((particle, index) => (
          <motion.div
            key={`${particle.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${particle.position.x}%`,
              top: `${particle.position.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              borderRadius: "50%",
              boxShadow: `0 0 10px ${particle.color}`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 2 / entanglementSpeed,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          >
            {/* Entanglement Connection */}
            {index % 2 === 0 && (
              <motion.div
                className="absolute left-1/2 top-1/2"
                style={{
                  width: "100px",
                  height: "2px",
                  background: `linear-gradient(90deg, ${particle.color}, transparent)`,
                  transformOrigin: "left center",
                }}
                animate={{
                  rotate: [0, 360],
                  scaleX: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3 / entanglementSpeed,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Quantum Waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: `1px solid ${colors[i % colors.length]}`,
            borderRadius: "50%",
            opacity: 0.2,
          }}
          animate={{
            scale: [1 + i * 0.1, 1.2 + i * 0.1, 1 + i * 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 / entanglementSpeed,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

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

export default Carousel101 