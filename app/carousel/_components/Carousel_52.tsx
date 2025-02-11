"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel52Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  confettiCount?: number
  burstForce?: number
}

const Carousel52 = ({
  children,
  autoPlay = false,
  interval = 3000,
  confettiCount = 50,
  burstForce = 1,
}: Carousel52Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [confetti, setConfetti] = useState<Array<{
    id: number
    x: number
    y: number
    rotation: number
    color: string
    size: number
  }>>([])

  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateConfetti()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateConfetti()
  }

  const generateConfetti = () => {
    const newConfetti = Array.from({ length: confettiCount }, (_, i) => ({
      id: i,
      x: 50,
      y: 50,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5,
    }))
    setConfetti(newConfetti)
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            scale: 1.1,
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
        {confetti.map((piece) => (
          <motion.div
            key={`${piece.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              transform: `rotate(${piece.rotation}deg)`,
            }}
            initial={{
              scale: 0,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              x: (Math.random() - 0.5) * 400 * burstForce,
              y: (Math.random() - 0.5) * 400 * burstForce,
              rotate: Math.random() * 720 - 360,
              transition: {
                duration: 1.5,
                ease: [0.4, 0, 0.2, 1],
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

export default Carousel52 