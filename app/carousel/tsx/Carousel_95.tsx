"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel95Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  cloudCount?: number
  nebulaSpeed?: number
}

const Carousel95 = ({
  children,
  autoPlay = false,
  interval = 3000,
  cloudCount = 6,
  nebulaSpeed = 1,
}: Carousel95Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [clouds, setClouds] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    rotation: number
    color: string
    delay: number
    density: number
  }>>([])

  const colors = [
    "rgba(244, 63, 94, 0.4)",  // Red
    "rgba(168, 85, 247, 0.4)", // Purple
    "rgba(59, 130, 246, 0.4)", // Blue
    "rgba(16, 185, 129, 0.4)", // Green
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
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
      },
      size: 150 + Math.random() * 200,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.3,
      density: 0.3 + Math.random() * 0.7,
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

      <AnimatePresence>
        {clouds.map((cloud) => (
          <motion.div
            key={`${cloud.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${cloud.position.x}%`,
              top: `${cloud.position.y}%`,
              width: `${cloud.size}px`,
              height: `${cloud.size}px`,
              transform: `translate(-50%, -50%) rotate(${cloud.rotation}deg)`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
          >
            {/* Nebula Core */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${cloud.color} 0%, transparent 70%)`,
                filter: "blur(30px)",
                mixBlendMode: "screen",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, cloud.density, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5 / nebulaSpeed,
                delay: cloud.delay,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            />

            {/* Nebula Wisps */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(from ${i * 90}deg at 50% 50%, 
                    ${cloud.color} 0%, 
                    transparent 25%, 
                    ${cloud.color} 50%, 
                    transparent 75%, 
                    ${cloud.color} 100%)`,
                  filter: "blur(20px)",
                  mixBlendMode: "screen",
                  opacity: cloud.density * 0.5,
                }}
                animate={{
                  rotate: [i * 90, i * 90 + 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 8 / nebulaSpeed,
                  delay: cloud.delay + i * 0.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Star Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: "0 0 4px white",
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 / nebulaSpeed,
                  delay: cloud.delay + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Background Stars */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
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

export default Carousel95 