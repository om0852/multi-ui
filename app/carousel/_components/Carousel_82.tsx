"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel82Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  columnCount?: number
  fallSpeed?: number
}

const Carousel82 = ({
  children,
  autoPlay = false,
  interval = 3000,
  columnCount = 20,
  fallSpeed = 1,
}: Carousel82Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [columns, setColumns] = useState<Array<{
    id: number
    x: number
    chars: string[]
    color: string
    delay: number
    speed: number
  }>>([])

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"
  const colors = [
    "rgba(0, 255, 0, 0.6)",
    "rgba(0, 240, 0, 0.6)",
    "rgba(0, 220, 0, 0.6)",
    "rgba(0, 200, 0, 0.6)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateColumns()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateColumns()
  }

  const generateColumns = () => {
    const newColumns = Array.from({ length: columnCount }, (_, i) => ({
      id: i,
      x: (i / columnCount) * 100,
      chars: Array.from({ length: 10 }, () => 
        characters[Math.floor(Math.random() * characters.length)]
      ),
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      speed: 0.5 + Math.random() * 0.5,
    }))
    setColumns(newColumns)
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
        {columns.map((column) => (
          <motion.div
            key={`${column.id}-${currentIndex}`}
            className="absolute flex flex-col items-center"
            style={{
              left: `${column.x}%`,
              color: column.color,
              textShadow: `0 0 10px ${column.color}`,
              fontFamily: "monospace",
              fontSize: "16px",
              fontWeight: "bold",
              mixBlendMode: "screen",
            }}
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3 / (fallSpeed * column.speed),
              delay: column.delay,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {column.chars.map((char, i) => (
              <motion.span
                key={i}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,255,0,0.1) 0%, transparent 70%)",
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

export default Carousel82 