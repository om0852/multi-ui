"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel97Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  portalCount?: number
  portalSpeed?: number
}

const Carousel97 = ({
  children,
  autoPlay = false,
  interval = 3000,
  portalCount = 3,
  portalSpeed = 1,
}: Carousel97Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [portals, setPortals] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    rotation: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "rgba(147, 51, 234, 0.7)",  // Purple
    "rgba(59, 130, 246, 0.7)",  // Blue
    "rgba(236, 72, 153, 0.7)",  // Pink
    "rgba(52, 211, 153, 0.7)",  // Green
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generatePortals()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generatePortals()
  }

  const generatePortals = () => {
    const newPortals = Array.from({ length: portalCount }, (_, i) => ({
      id: i,
      position: {
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
      },
      size: 150 + Math.random() * 200,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.2,
    }))
    setPortals(newPortals)
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
        {portals.map((portal) => (
          <motion.div
            key={`${portal.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${portal.position.x}%`,
              top: `${portal.position.y}%`,
              width: `${portal.size}px`,
              height: `${portal.size}px`,
              transform: `translate(-50%, -50%) rotate(${portal.rotation}deg)`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
          >
            {/* Portal Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `4px solid ${portal.color}`,
                boxShadow: `0 0 30px ${portal.color}`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 0.4, 0.8],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 / portalSpeed,
                delay: portal.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Portal Energy */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at center, ${portal.color} 0%, transparent 70%)`,
                filter: "blur(20px)",
                mixBlendMode: "screen",
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 / portalSpeed,
                delay: portal.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Dimensional Rifts */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                style={{
                  border: `2px solid ${portal.color}`,
                  borderRadius: "50%",
                  transform: `rotate(${i * 60}deg)`,
                }}
                animate={{
                  rotate: [i * 60, i * 60 + 360],
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 / portalSpeed,
                  delay: portal.delay + i * 0.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Energy Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: portal.color,
                  boxShadow: `0 0 10px ${portal.color}`,
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, Math.cos(i * Math.PI * 2 / 5) * 50, 0],
                  y: [0, Math.sin(i * Math.PI * 2 / 5) * 50, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 / portalSpeed,
                  delay: portal.delay + i * 0.1,
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
          background: "radial-gradient(circle at center, rgba(147,51,234,0.1) 0%, transparent 70%)",
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

export default Carousel97 