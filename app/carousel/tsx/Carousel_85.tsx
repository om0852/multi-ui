"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel85Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  vortexCount?: number
  spinSpeed?: number
}

const Carousel85 = ({
  children,
  autoPlay = false,
  interval = 3000,
  vortexCount = 3,
  spinSpeed = 1,
}: Carousel85Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [vortices, setVortices] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    color: string
    delay: number
    rotation: number
  }>>([])

  const colors = [
    "rgba(147, 51, 234, 0.5)",
    "rgba(88, 28, 135, 0.5)",
    "rgba(192, 132, 252, 0.5)",
    "rgba(168, 85, 247, 0.5)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateVortices()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateVortices()
  }

  const generateVortices = () => {
    const newVortices = Array.from({ length: vortexCount }, (_, i) => ({
      id: i,
      position: {
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
      },
      size: 100 + Math.random() * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.2,
      rotation: Math.random() * 360,
    }))
    setVortices(newVortices)
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
        {vortices.map((vortex) => (
          <motion.div
            key={`${vortex.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${vortex.position.x}%`,
              top: `${vortex.position.y}%`,
              width: `${vortex.size}px`,
              height: `${vortex.size}px`,
              background: `conic-gradient(from ${vortex.rotation}deg at 50% 50%, 
                ${vortex.color} 0%, 
                transparent 25%, 
                ${vortex.color} 50%, 
                transparent 75%, 
                ${vortex.color} 100%)`,
              filter: "blur(8px)",
              mixBlendMode: "screen",
              transform: "translate(-50%, -50%)",
            }}
            initial={{
              scale: 0,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              scale: [0, 1, 0.8, 1, 0],
              opacity: [0, 0.8, 0.5, 0.8, 0],
              rotate: [0, 360 * spinSpeed],
            }}
            transition={{
              duration: 4 / spinSpeed,
              delay: vortex.delay,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${vortex.color} 0%, transparent 70%)`,
                mixBlendMode: "screen",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

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

export default Carousel85 