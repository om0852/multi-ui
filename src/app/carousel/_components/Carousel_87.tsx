"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel87Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  lineCount?: number
  fieldStrength?: number
}

const Carousel87 = ({
  children,
  autoPlay = false,
  interval = 3000,
  lineCount = 20,
  fieldStrength = 1,
}: Carousel87Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [fieldLines, setFieldLines] = useState<Array<{
    id: number
    startY: number
    controlPoint1: { x: number; y: number }
    controlPoint2: { x: number; y: number }
    color: string
    delay: number
  }>>([])

  const colors = [
    "rgba(6, 182, 212, 0.4)",
    "rgba(14, 165, 233, 0.4)",
    "rgba(59, 130, 246, 0.4)",
    "rgba(99, 102, 241, 0.4)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateFieldLines()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateFieldLines()
  }

  const generateFieldLines = () => {
    const newFieldLines = Array.from({ length: lineCount }, (_, i) => ({
      id: i,
      startY: (i / lineCount) * 100,
      controlPoint1: {
        x: 25 + Math.random() * 25,
        y: (i / lineCount) * 100 + (-10 + Math.random() * 20),
      },
      controlPoint2: {
        x: 50 + Math.random() * 25,
        y: (i / lineCount) * 100 + (-10 + Math.random() * 20),
      },
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.1,
    }))
    setFieldLines(newFieldLines)
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

      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.3)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
        </defs>
        <AnimatePresence>
          {fieldLines.map((line) => (
            <motion.path
              key={`${line.id}-${currentIndex}`}
              d={`M 0 ${line.startY} 
                  C ${line.controlPoint1.x}% ${line.controlPoint1.y}%,
                    ${line.controlPoint2.x}% ${line.controlPoint2.y}%,
                    100% ${line.startY}%`}
              stroke={line.color}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 0.6, 0],
                strokeWidth: [1, 3, 1],
              }}
              transition={{
                duration: 3 / fieldStrength,
                delay: line.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </AnimatePresence>
      </svg>

      <AnimatePresence>
        {fieldLines.map((line) => (
          <motion.div
            key={`particle-${line.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              width: "4px",
              height: "4px",
              top: `${line.startY}%`,
              background: line.color,
              boxShadow: `0 0 8px ${line.color}`,
              filter: "blur(1px)",
            }}
            initial={{ x: "-5%", opacity: 0 }}
            animate={{
              x: ["0%", "105%"],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 / fieldStrength,
              delay: line.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(6,182,212,0.1) 0%, transparent 70%)",
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

export default Carousel87 