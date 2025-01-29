"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel47Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  pixelSize?: number
  sortSpeed?: number
}

const Carousel47 = ({
  children,
  autoPlay = false,
  interval = 3000,
  pixelSize = 20,
  sortSpeed = 1,
}: Carousel47Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [pixels, setPixels] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generatePixels()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generatePixels()
  }

  const generatePixels = () => {
    const cols = Math.ceil(100 / pixelSize)
    const rows = Math.ceil(400 / pixelSize)
    const newPixels = []
    
    for (let i = 0; i < cols * rows; i++) {
      const col = i % cols
      const row = Math.floor(i / cols)
      newPixels.push({
        id: i,
        x: col * pixelSize,
        y: row * pixelSize,
        delay: Math.random() * 0.5 / sortSpeed,
      })
    }
    setPixels(newPixels)
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
        {pixels.map((pixel) => (
          <motion.div
            key={`${pixel.id}-${currentIndex}`}
            className="absolute bg-white/10 backdrop-blur-sm"
            style={{
              width: `${pixelSize}px`,
              height: `${pixelSize}px`,
              left: `${pixel.x}px`,
              top: `${pixel.y}px`,
            }}
            initial={{
              opacity: 1,
              y: -400,
            }}
            animate={{
              opacity: 0,
              y: 0,
              transition: {
                duration: 0.8 / sortSpeed,
                delay: pixel.delay,
                ease: "easeOut",
              },
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

export default Carousel47 