"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel75Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  strandCount?: number
  rotationSpeed?: number
}

const Carousel75 = ({
  children,
  autoPlay = false,
  interval = 3000,
  strandCount = 20,
  rotationSpeed = 1,
}: Carousel75Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [strands, setStrands] = useState<Array<{
    id: number
    baseY: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "rgba(0, 255, 255, 0.6)",
    "rgba(0, 200, 255, 0.6)",
    "rgba(0, 150, 255, 0.6)",
    "rgba(0, 100, 255, 0.6)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateStrands()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateStrands()
  }

  const generateStrands = () => {
    const newStrands = Array.from({ length: strandCount }, (_, i) => ({
      id: i,
      baseY: (i / strandCount) * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.05,
    }))
    setStrands(newStrands)
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
        {strands.map((strand) => (
          <>
            <motion.div
              key={`strand1-${strand.id}-${currentIndex}`}
              className="absolute h-2 w-8 rounded-full"
              style={{
                background: strand.color,
                top: `${strand.baseY}%`,
                left: "50%",
                filter: "blur(2px)",
                boxShadow: `0 0 10px ${strand.color}`,
                mixBlendMode: "screen",
              }}
              initial={{
                x: -100,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [-100, 0, 100],
                y: [0, 20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotateY: [0, 180 * rotationSpeed],
              }}
              transition={{
                duration: 3 / rotationSpeed,
                delay: strand.delay,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            />
            <motion.div
              key={`strand2-${strand.id}-${currentIndex}`}
              className="absolute h-2 w-8 rounded-full"
              style={{
                background: strand.color,
                top: `${strand.baseY}%`,
                left: "50%",
                filter: "blur(2px)",
                boxShadow: `0 0 10px ${strand.color}`,
                mixBlendMode: "screen",
              }}
              initial={{
                x: 100,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [100, 0, -100],
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotateY: [180, 0, -180],
              }}
              transition={{
                duration: 3 / rotationSpeed,
                delay: strand.delay,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            />
          </>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,128,255,0.1) 0%, transparent 70%)",
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

export default Carousel75 