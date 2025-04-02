"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel78Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  debrisCount?: number
  tornadoSpeed?: number
}

const Carousel78 = ({
  children,
  autoPlay = false,
  interval = 3000,
  debrisCount = 50,
  tornadoSpeed = 1,
}: Carousel78Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [debris, setDebris] = useState<Array<{
    id: number
    size: number
    color: string
    delay: number
    radius: number
    angle: number
    height: number
    rotationSpeed: number
  }>>([])

  const colors = [
    "rgba(150, 150, 150, 0.6)",
    "rgba(200, 200, 200, 0.6)",
    "rgba(180, 180, 180, 0.6)",
    "rgba(220, 220, 220, 0.6)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateDebris()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateDebris()
  }

  const generateDebris = () => {
    const newDebris = Array.from({ length: debrisCount }, (_, i) => ({
      id: i,
      size: 2 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      radius: 10 + Math.random() * 30,
      angle: Math.random() * 360,
      height: Math.random() * 100,
      rotationSpeed: (0.5 + Math.random() * 0.5) * tornadoSpeed,
    }))
    setDebris(newDebris)
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
        {debris.map((item) => (
          <motion.div
            key={`${item.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              background: item.color,
              left: "50%",
              top: "50%",
              boxShadow: `0 0 ${item.size * 2}px ${item.color}`,
              mixBlendMode: "screen",
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              x: Array.from({ length: 60 }, (_, i) => {
                const progress = i / 59
                const angle = item.angle + progress * 720 * item.rotationSpeed
                return Math.cos((angle * Math.PI) / 180) * (item.radius * (1 + progress))
              }),
              y: Array.from({ length: 60 }, (_, i) => {
                const progress = i / 59
                const angle = item.angle + progress * 720 * item.rotationSpeed
                return (
                  Math.sin((angle * Math.PI) / 180) * (item.radius * (1 + progress)) -
                  item.height * progress
                )
              }),
            }}
            transition={{
              duration: 2 / tornadoSpeed,
              delay: item.delay,
              ease: "linear",
              times: Array.from({ length: 60 }, (_, i) => i / 59),
            }}
          />
        ))}
      </AnimatePresence>

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

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%)",
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

export default Carousel78 