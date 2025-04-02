"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel50Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  bubbleCount?: number
  bubbleSize?: number
}

const Carousel50 = ({
  children,
  autoPlay = false,
  interval = 3000,
  bubbleCount = 15,
  bubbleSize = 1,
}: Carousel50Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; size: number; delay: number }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateBubbles()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateBubbles()
  }

  const generateBubbles = () => {
    const newBubbles = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: (Math.random() * 0.5 + 0.5) * bubbleSize,
      delay: Math.random() * 0.5,
    }))
    setBubbles(newBubbles)
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
          initial={{ opacity: 0, scale: 1.1 }}
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
            scale: 0.9,
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
        {bubbles.map((bubble) => (
          <motion.div
            key={`${bubble.id}-${currentIndex}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${bubble.x}%`,
              width: `${40 * bubble.size}px`,
              height: `${40 * bubble.size}px`,
              background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
            }}
            initial={{
              y: "120%",
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: "-120%",
              opacity: [0, 1, 0],
              scale: [0.5, bubble.size, 0.5],
              x: [0, Math.sin(bubble.id) * 50, 0],
              transition: {
                duration: 3,
                delay: bubble.delay,
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

export default Carousel50 