"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel100Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  cloudCount?: number
  nebulaSpeed?: number
}

const Carousel100 = ({
  children,
  autoPlay = false,
  interval = 3000,
  cloudCount = 6,
  nebulaSpeed = 1,
}: Carousel100Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [clouds, setClouds] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    color: string
    rotation: number
    delay: number
  }>>([])

  const colors = [
    "rgba(244, 114, 182, 0.6)", // Pink
    "rgba(168, 85, 247, 0.6)",  // Purple
    "rgba(59, 130, 246, 0.6)",  // Blue
    "rgba(52, 211, 153, 0.6)",  // Green
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateClouds()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateClouds()
  }

  const generateClouds = () => {
    const newClouds = Array.from({ length: cloudCount }, (_, i) => ({
      id: i,
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      size: 150 + Math.random() * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      delay: i * 0.2,
    }))
    setClouds(newClouds)
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

      {/* Nebula Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(168,85,247,0.2) 0%, transparent 70%)",
          filter: "blur(30px)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4 / nebulaSpeed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Nebula Clouds */}
      <AnimatePresence>
        {clouds.map((cloud) => (
          <motion.div
            key={`${cloud.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              left: `${cloud.position.x}%`,
              top: `${cloud.position.y}%`,
              width: `${cloud.size}px`,
              height: `${cloud.size}px`,
              background: cloud.color,
              filter: "blur(40px)",
              mixBlendMode: "screen",
              transform: `rotate(${cloud.rotation}deg)`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
              rotate: [cloud.rotation, cloud.rotation + 360],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 6 / nebulaSpeed,
              delay: cloud.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Star Field */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy Streams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: `1px solid ${colors[i % colors.length]}`,
            borderRadius: "50%",
            transform: `scale(${1 + i * 0.2})`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [(1 + i * 0.2) * 0.8, (1 + i * 0.2) * 1.2, (1 + i * 0.2) * 0.8],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 / nebulaSpeed,
            delay: i * 0.5,
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

export default Carousel100 