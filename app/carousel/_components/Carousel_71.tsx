"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel71Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  waveCount?: number
  flowSpeed?: number
}

const Carousel71 = ({
  children,
  autoPlay = false,
  interval = 3000,
  waveCount = 5,
  flowSpeed = 1,
}: Carousel71Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [waves, setWaves] = useState<Array<{
    id: number
    height: number
    color1: string
    color2: string
    delay: number
    amplitude: number
  }>>([])

  const colors = [
    ["#00ff87", "#60efff"],
    ["#0061ff", "#60efff"],
    ["#00ff87", "#00ff1a"],
    ["#00ffcc", "#00ff87"],
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateWaves()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateWaves()
  }

  const generateWaves = () => {
    const newWaves = Array.from({ length: waveCount }, (_, i) => {
      const colorPair = colors[Math.floor(Math.random() * colors.length)]
      return {
        id: i,
        height: 100 / waveCount,
        color1: colorPair[0],
        color2: colorPair[1],
        delay: i * 0.2,
        amplitude: 20 + Math.random() * 30,
      }
    })
    setWaves(newWaves)
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
        {waves.map((wave, index) => (
          <motion.div
            key={`${wave.id}-${currentIndex}`}
            className="absolute w-full"
            style={{
              height: `${wave.height}%`,
              top: `${index * wave.height}%`,
              background: `linear-gradient(90deg, ${wave.color1}33, ${wave.color2}33)`,
              backdropFilter: "blur(8px)",
              mixBlendMode: "screen",
            }}
            initial={{
              x: "-100%",
              scaleY: 0,
            }}
            animate={{
              x: ["100%", "-100%"],
              scaleY: [0, 1, 0],
              y: [0, wave.amplitude, 0],
            }}
            transition={{
              duration: 3 / flowSpeed,
              delay: wave.delay,
              ease: "easeInOut",
              times: [0, 1],
              repeat: Infinity,
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,255,200,0.1) 0%, transparent 70%)",
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

export default Carousel71 