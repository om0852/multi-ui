"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel60Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  pixelSize?: number
  rainSpeed?: number
}

const Carousel60 = ({
  children,
  autoPlay = false,
  interval = 3000,
  pixelSize = 10,
  rainSpeed = 1,
}: Carousel60Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [pixels, setPixels] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    delay: number
    color: string
  }>>([])

  const colors = [
    "#00ff00",
    "#33ff33",
    "#66ff66",
    "#99ff99",
    "#ccffcc",
  ]

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
    const newPixels = Array.from({ length: cols * 3 }, (_, i) => ({
      id: i,
      x: (i % cols) * pixelSize,
      y: -pixelSize * 2 - Math.random() * 200,
      size: pixelSize * (0.8 + Math.random() * 0.4),
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
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
      style={{ background: "#000" }}
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
            className="absolute"
            style={{
              left: `${pixel.x}px`,
              width: `${pixel.size}px`,
              height: `${pixel.size}px`,
              backgroundColor: pixel.color,
              boxShadow: `0 0 10px ${pixel.color}`,
              filter: "blur(1px)",
            }}
            initial={{
              y: pixel.y,
              opacity: 0,
            }}
            animate={{
              y: [pixel.y, 400 + pixel.size],
              opacity: [0, 1, 0.8, 0],
              scale: [1, 1, 0.8, 0],
            }}
            transition={{
              duration: 2 / rainSpeed,
              delay: pixel.delay,
              ease: "linear",
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,255,0,0.1) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
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

export default Carousel60 