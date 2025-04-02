"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel77Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  fractalDepth?: number
  bloomSpeed?: number
}

const Carousel77 = ({
  children,
  autoPlay = false,
  interval = 3000,
  fractalDepth = 4,
  bloomSpeed = 1,
}: Carousel77Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [fractals, setFractals] = useState<Array<{
    id: number
    x: number
    y: number
    rotation: number
    scale: number
    color: string
    delay: number
    depth: number
  }>>([])

  const colors = [
    "rgba(255, 100, 255, 0.4)",
    "rgba(100, 255, 255, 0.4)",
    "rgba(255, 255, 100, 0.4)",
    "rgba(100, 200, 255, 0.4)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateFractals()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateFractals()
  }

  const generateFractals = () => {
    const baseFractals = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: 50,
      y: 50,
      rotation: (360 / 6) * i,
      scale: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.1,
      depth: 0,
    }))

    const allFractals = [...baseFractals]
    let currentDepth = 0
    let currentFractals = baseFractals

    while (currentDepth < fractalDepth) {
      const newFractals = currentFractals.flatMap((fractal, index) => {
        return Array.from({ length: 2 }, (_, i) => ({
          id: allFractals.length + index * 2 + i,
          x: fractal.x + Math.cos((fractal.rotation * Math.PI) / 180) * 20,
          y: fractal.y + Math.sin((fractal.rotation * Math.PI) / 180) * 20,
          rotation: fractal.rotation + (i === 0 ? 60 : -60),
          scale: fractal.scale * 0.7,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: fractal.delay + 0.1,
          depth: currentDepth + 1,
        }))
      })

      allFractals.push(...newFractals)
      currentFractals = newFractals
      currentDepth++
    }

    setFractals(allFractals)
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
        {fractals.map((fractal) => (
          <motion.div
            key={`${fractal.id}-${currentIndex}`}
            className="absolute"
            style={{
              width: "100px",
              height: "100px",
              left: `${fractal.x}%`,
              top: `${fractal.y}%`,
              transform: `translate(-50%, -50%) rotate(${fractal.rotation}deg)`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, fractal.scale, 0],
              opacity: [0, 0.8, 0],
              rotate: [fractal.rotation, fractal.rotation + 360],
            }}
            transition={{
              duration: 3 / bloomSpeed,
              delay: fractal.delay + fractal.depth * 0.2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(${fractal.rotation}deg, ${fractal.color} 0%, transparent 70%)`,
                filter: "blur(8px)",
                mixBlendMode: "screen",
              }}
            />
          </motion.div>
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

export default Carousel77 