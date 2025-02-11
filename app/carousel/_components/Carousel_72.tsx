"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel72Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  crystalCount?: number
  growthSpeed?: number
}

const Carousel72 = ({
  children,
  autoPlay = false,
  interval = 3000,
  crystalCount = 8,
  growthSpeed = 1,
}: Carousel72Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [crystals, setCrystals] = useState<Array<{
    id: number
    x: number
    y: number
    rotation: number
    size: number
    color: string
    delay: number
    branches: Array<{
      angle: number
      length: number
      width: number
    }>
  }>>([])

  const colors = [
    "rgba(255, 255, 255, 0.7)",
    "rgba(200, 255, 255, 0.7)",
    "rgba(230, 255, 255, 0.7)",
    "rgba(220, 240, 255, 0.7)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateCrystals()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateCrystals()
  }

  const generateCrystals = () => {
    const newCrystals = Array.from({ length: crystalCount }, (_, i) => {
      const branchCount = 4 + Math.floor(Math.random() * 4)
      const branches = Array.from({ length: branchCount }, (_, j) => ({
        angle: (360 / branchCount) * j + Math.random() * 20 - 10,
        length: 50 + Math.random() * 50,
        width: 2 + Math.random() * 3,
      }))

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        size: 20 + Math.random() * 30,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: i * 0.2,
        branches,
      }
    })
    setCrystals(newCrystals)
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
        {crystals.map((crystal) => (
          <motion.div
            key={`${crystal.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${crystal.x}%`,
              top: `${crystal.y}%`,
              width: `${crystal.size}px`,
              height: `${crystal.size}px`,
              transform: `translate(-50%, -50%) rotate(${crystal.rotation}deg)`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
          >
            {crystal.branches.map((branch, index) => (
              <motion.div
                key={index}
                className="absolute origin-center"
                style={{
                  left: "50%",
                  top: "50%",
                  width: "2px",
                  height: "0",
                  background: crystal.color,
                  transform: `rotate(${branch.angle}deg)`,
                  boxShadow: `0 0 10px ${crystal.color}`,
                }}
                initial={{
                  height: 0,
                  width: 0,
                }}
                animate={{
                  height: branch.length,
                  width: branch.width,
                }}
                transition={{
                  duration: 1 / growthSpeed,
                  delay: crystal.delay,
                  ease: "easeOut",
                }}
              />
            ))}
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

export default Carousel72 