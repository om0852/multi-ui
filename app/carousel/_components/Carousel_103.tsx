"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel103Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  particleCount?: number
  waveIntensity?: number
}

const Carousel103 = ({
  children,
  autoPlay = false,
  interval = 3000,
  particleCount = 30,
  waveIntensity = 1,
}: Carousel103Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    color: string
    duration: number
  }>>([])

  const colors = [
    "rgba(99, 102, 241, 0.4)", // Indigo
    "rgba(79, 70, 229, 0.4)",  // Purple
    "rgba(59, 130, 246, 0.4)", // Blue
    "rgba(147, 51, 234, 0.4)", // Violet
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    generateParticles()
  }

  const generateParticles = () => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 2 + Math.random() * 3,
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
      className="relative w-full h-[400px] overflow-hidden rounded-xl"
      style={{
        background: "rgba(17, 24, 39, 0.7)",
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10" />
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={`${particle.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              boxShadow: `0 0 10px ${particle.color}`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [-20, 20],
              x: [-20, 20],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Wave Effects */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: `linear-gradient(180deg, transparent, ${colors[i]})`,
            opacity: 0.1 * waveIntensity,
          }}
          animate={{
            y: [0, -20, 0],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between items-center px-4 -translate-y-1/2">
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </motion.button>
      </div>

      {/* Modern Pagination */}
      <div className="absolute bottom-6 inset-x-0">
        <div className="flex justify-center items-center gap-3">
          {children.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-white/30 group-hover:bg-white/50"
                }`}
              />
              {currentIndex === index && (
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-white/50"
                  layoutId="paginationIndicator"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Glassmorphism Border Effect */}
      <div className="absolute inset-0 rounded-xl border border-white/10" />
      
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 60%)",
        }}
      />
    </div>
  )
}

export default Carousel103 