"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel68Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  spiralCount?: number
  rotationSpeed?: number
}

const Carousel68 = ({
  children,
  autoPlay = false,
  interval = 3000,
  spiralCount = 6,
  rotationSpeed = 1,
}: Carousel68Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [spirals, setSpirals] = useState<Array<{
    id: number
    angle: number
    scale: number
    delay: number
  }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateSpirals()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateSpirals()
  }

  const generateSpirals = () => {
    const newSpirals = Array.from({ length: spiralCount }, (_, i) => ({
      id: i,
      angle: (360 / spiralCount) * i,
      scale: 0.5 + Math.random() * 0.5,
      delay: i * 0.1,
    }))
    setSpirals(newSpirals)
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, rotateZ: -180 * rotationSpeed }}
          animate={{
            opacity: 1,
            rotateZ: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            rotateZ: 180 * rotationSpeed,
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
        {spirals.map((spiral) => (
          <motion.div
            key={`${spiral.id}-${currentIndex}`}
            className="absolute inset-0"
            style={{
              transformOrigin: "center",
              transform: `rotate(${spiral.angle}deg)`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
              rotateZ: 0,
            }}
            animate={{
              scale: [0, spiral.scale, 0],
              opacity: [0, 0.5, 0],
              rotateZ: [0, 360 * rotationSpeed],
            }}
            transition={{
              duration: 1.5,
              delay: spiral.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `conic-gradient(from ${spiral.angle}deg, 
                  rgba(255,255,255,0) 0%, 
                  rgba(255,255,255,0.2) 50%, 
                  rgba(255,255,255,0) 100%)`,
                filter: "blur(8px)",
                mixBlendMode: "overlay",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
          mixBlendMode: "overlay",
        }}
        animate={{
          rotate: [0, 360 * rotationSpeed],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
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

export default Carousel68 