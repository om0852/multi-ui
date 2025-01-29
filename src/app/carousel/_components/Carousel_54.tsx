"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel54Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  patternSize?: number
  dissolveSpeed?: number
}

const Carousel54 = ({
  children,
  autoPlay = false,
  interval = 3000,
  patternSize = 20,
  dissolveSpeed = 1,
}: Carousel54Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [patterns, setPatterns] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generatePatterns()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generatePatterns()
  }

  const generatePatterns = () => {
    const cols = Math.ceil(100 / patternSize)
    const rows = Math.ceil(400 / patternSize)
    const newPatterns = []

    for (let i = 0; i < cols * rows; i++) {
      const col = i % cols
      const row = Math.floor(i / cols)
      newPatterns.push({
        id: i,
        x: col * patternSize,
        y: row * patternSize,
        delay: (col + row) * 0.05 / dissolveSpeed,
      })
    }
    setPatterns(newPatterns)
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
        {patterns.map((pattern) => (
          <motion.div
            key={`${pattern.id}-${currentIndex}`}
            className="absolute bg-white"
            style={{
              width: `${patternSize}px`,
              height: `${patternSize}px`,
              left: `${pattern.x}px`,
              top: `${pattern.y}px`,
              clipPath: `polygon(${Math.random() * 25}% 0%, ${75 + Math.random() * 25}% 0%, 100% ${Math.random() * 25}%, 100% ${75 + Math.random() * 25}%, ${75 + Math.random() * 25}% 100%, ${Math.random() * 25}% 100%, 0% ${75 + Math.random() * 25}%, 0% ${Math.random() * 25}%)`,
            }}
            initial={{
              opacity: 1,
              scale: 1,
            }}
            animate={{
              opacity: 0,
              scale: [1, 1.2, 0],
              rotate: Math.random() * 180 - 90,
            }}
            transition={{
              duration: 0.8 / dissolveSpeed,
              delay: pattern.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

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

export default Carousel54 