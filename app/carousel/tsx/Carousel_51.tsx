"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel51Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  trailCount?: number
  trailColor?: string
}

const Carousel51 = ({
  children,
  autoPlay = false,
  interval = 3000,
  trailCount = 5,
  trailColor = "#00ff00",
}: Carousel51Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [trails, setTrails] = useState<Array<{ id: number; x: number; y: number }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateTrails()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateTrails()
  }

  const generateTrails = () => {
    const newTrails = Array.from({ length: trailCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setTrails(newTrails)
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
        {trails.map((trail, index) => (
          <motion.div
            key={`${trail.id}-${currentIndex}`}
            className="absolute pointer-events-none"
            style={{
              left: `${trail.x}%`,
              top: `${trail.y}%`,
              width: "2px",
              height: "40px",
              backgroundColor: trailColor,
              filter: "blur(4px)",
              boxShadow: `0 0 10px ${trailColor}, 0 0 20px ${trailColor}, 0 0 30px ${trailColor}`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: Math.random() * 360,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: `${Math.random() * 720 - 360}deg`,
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0) 100%)",
            `radial-gradient(circle at center, ${trailColor}10 0%, rgba(0,0,0,0) 70%)`,
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0) 100%)",
          ],
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

export default Carousel51 