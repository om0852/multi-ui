"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel89Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  clusterCount?: number
  gravityStrength?: number
}

const Carousel89 = ({
  children,
  autoPlay = false,
  interval = 3000,
  clusterCount = 5,
  gravityStrength = 1,
}: Carousel89Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [clusters, setClusters] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    intensity: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "rgba(30, 41, 59, 0.7)",
    "rgba(51, 65, 85, 0.7)",
    "rgba(71, 85, 105, 0.7)",
    "rgba(100, 116, 139, 0.7)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateClusters()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateClusters()
  }

  const generateClusters = () => {
    const newClusters = Array.from({ length: clusterCount }, (_, i) => ({
      id: i,
      position: {
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
      },
      size: 100 + Math.random() * 200,
      intensity: 0.5 + Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.3,
    }))
    setClusters(newClusters)
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
        {clusters.map((cluster) => (
          <motion.div
            key={`${cluster.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${cluster.position.x}%`,
              top: `${cluster.position.y}%`,
              width: `${cluster.size}px`,
              height: `${cluster.size}px`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
          >
            {/* Dark Matter Core */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${cluster.color} 0%, transparent 70%)`,
                filter: "blur(20px)",
                mixBlendMode: "multiply",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, cluster.intensity, 0],
              }}
              transition={{
                duration: 4 / gravityStrength,
                delay: cluster.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Gravitational Lensing Effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "transparent",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, 0.3, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6 / gravityStrength,
                delay: cluster.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Light Distortion Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 3 / gravityStrength,
                  delay: cluster.delay + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, transparent 70%)",
          mixBlendMode: "multiply",
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

export default Carousel89 