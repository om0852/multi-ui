"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel65Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  pulseCount?: number
  neonIntensity?: number
}

const Carousel65 = ({
  children,
  autoPlay = false,
  interval = 3000,
  pulseCount = 5,
  neonIntensity = 1,
}: Carousel65Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [pulses, setPulses] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "#ff00ff",
    "#00ffff",
    "#ff0066",
    "#00ff99",
    "#ff3300",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generatePulses()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generatePulses()
  }

  const generatePulses = () => {
    const newPulses = Array.from({ length: pulseCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 100 + Math.random() * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.2,
    }))
    setPulses(newPulses)
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
        {pulses.map((pulse) => (
          <motion.div
            key={`${pulse.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              left: `${pulse.x}%`,
              top: `${pulse.y}%`,
              width: `${pulse.size}px`,
              height: `${pulse.size}px`,
              background: `radial-gradient(circle at center, ${pulse.color}88 0%, ${pulse.color}00 70%)`,
              filter: `blur(${8 * neonIntensity}px)`,
              mixBlendMode: "screen",
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 1.5],
              opacity: [0, 1 * neonIntensity, 0],
            }}
            transition={{
              duration: 1.5,
              delay: pulse.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 ${50 * neonIntensity}px rgba(255,255,255,0.3)`,
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(255,0,255,0.1) 0%, transparent 100%)",
          mixBlendMode: "screen",
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

export default Carousel65 