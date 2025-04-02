"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel69Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  plasmaCount?: number
  flowSpeed?: number
}

const Carousel69 = ({
  children,
  autoPlay = false,
  interval = 3000,
  plasmaCount = 4,
  flowSpeed = 1,
}: Carousel69Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [plasmas, setPlasmas] = useState<Array<{
    id: number
    x: number
    y: number
    scale: number
    rotation: number
    color1: string
    color2: string
    delay: number
  }>>([])

  const colors = [
    ["#ff00ff", "#00ffff"],
    ["#ff0066", "#00ff99"],
    ["#ffff00", "#00ff00"],
    ["#ff3300", "#0066ff"],
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generatePlasmas()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generatePlasmas()
  }

  const generatePlasmas = () => {
    const newPlasmas = Array.from({ length: plasmaCount }, (_, i) => {
      const colorPair = colors[Math.floor(Math.random() * colors.length)]
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 1 + Math.random(),
        rotation: Math.random() * 360,
        color1: colorPair[0],
        color2: colorPair[1],
        delay: i * 0.2,
      }
    })
    setPlasmas(newPlasmas)
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
        {plasmas.map((plasma) => (
          <motion.div
            key={`${plasma.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${plasma.x}%`,
              top: `${plasma.y}%`,
              width: "300px",
              height: "300px",
              transform: "translate(-50%, -50%)",
              mixBlendMode: "screen",
              filter: "blur(30px)",
            }}
            initial={{
              scale: 0,
              opacity: 0,
              rotate: plasma.rotation,
            }}
            animate={{
              scale: [0, plasma.scale, 0],
              opacity: [0, 0.7, 0],
              rotate: [plasma.rotation, plasma.rotation + 360],
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 2 / flowSpeed,
              delay: plasma.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(${plasma.rotation}deg, ${plasma.color1} 0%, ${plasma.color2} 100%)`,
                borderRadius: "50%",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
          mixBlendMode: "overlay",
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

export default Carousel69 