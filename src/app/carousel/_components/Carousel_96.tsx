"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel96Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  particlePairs?: number
  entanglementSpeed?: number
}

const Carousel96 = ({
  children,
  autoPlay = false,
  interval = 3000,
  particlePairs = 4,
  entanglementSpeed = 1,
}: Carousel96Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    position1: { x: number; y: number }
    position2: { x: number; y: number }
    size: number
    color: string
    delay: number
    spinState: number
  }>>([])

  const colors = [
    "rgba(56, 189, 248, 0.8)",  // Light Blue
    "rgba(232, 121, 249, 0.8)", // Pink
    "rgba(52, 211, 153, 0.8)",  // Green
    "rgba(251, 146, 60, 0.8)",  // Orange
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
    const newParticles = Array.from({ length: particlePairs }, (_, i) => ({
      id: i,
      position1: {
        x: 20 + Math.random() * 25,
        y: 20 + Math.random() * 60,
      },
      position2: {
        x: 55 + Math.random() * 25,
        y: 20 + Math.random() * 60,
      },
      size: 10 + Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.2,
      spinState: Math.random() > 0.5 ? 1 : -1,
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
            className="absolute inset-0"
          >
            {/* Entangled Particle 1 */}
            <motion.div
              className="absolute"
              style={{
                left: `${particle.position1.x}%`,
                top: `${particle.position1.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0.8, 1],
                opacity: [0, 0.8, 0.5, 0.8],
                rotate: [0, particle.spinState * 360],
              }}
              transition={{
                duration: 3 / entanglementSpeed,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: particle.color,
                  boxShadow: `0 0 20px ${particle.color}`,
                }}
              />
            </motion.div>

            {/* Entangled Particle 2 */}
            <motion.div
              className="absolute"
              style={{
                left: `${particle.position2.x}%`,
                top: `${particle.position2.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0.8, 1],
                opacity: [0, 0.8, 0.5, 0.8],
                rotate: [0, -particle.spinState * 360],
              }}
              transition={{
                duration: 3 / entanglementSpeed,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: particle.color,
                  boxShadow: `0 0 20px ${particle.color}`,
                }}
              />
            </motion.div>

            {/* Entanglement Connection */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.line
                x1={`${particle.position1.x}%`}
                y1={`${particle.position1.y}%`}
                x2={`${particle.position2.x}%`}
                y2={`${particle.position2.y}%`}
                stroke={particle.color}
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  strokeDashoffset: [0, -20],
                }}
                transition={{
                  duration: 2 / entanglementSpeed,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>

            {/* Quantum Field Effect */}
            <motion.div
              className="absolute"
              style={{
                left: `${(particle.position1.x + particle.position2.x) / 2}%`,
                top: `${(particle.position1.y + particle.position2.y) / 2}%`,
                width: `${particle.size * 4}px`,
                height: `${particle.size * 4}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at center, ${particle.color} 0%, transparent 70%)`,
                  filter: "blur(10px)",
                  mixBlendMode: "screen",
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2 / entanglementSpeed,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Quantum Field Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(56,189,248,0.1) 0%, transparent 70%)",
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

export default Carousel96 