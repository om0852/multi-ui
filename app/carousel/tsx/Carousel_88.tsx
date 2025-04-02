"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel88Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  rayCount?: number
  prismSpeed?: number
}

const Carousel88 = ({
  children,
  autoPlay = false,
  interval = 3000,
  rayCount = 12,
  prismSpeed = 1,
}: Carousel88Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [rays, setRays] = useState<Array<{
    id: number
    angle: number
    length: number
    width: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "rgba(239, 68, 68, 0.4)",   // Red
    "rgba(234, 179, 8, 0.4)",   // Yellow
    "rgba(34, 197, 94, 0.4)",   // Green
    "rgba(59, 130, 246, 0.4)",  // Blue
    "rgba(168, 85, 247, 0.4)",  // Purple
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateRays()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateRays()
  }

  const generateRays = () => {
    const newRays = Array.from({ length: rayCount }, (_, i) => ({
      id: i,
      angle: (360 / rayCount) * i,
      length: 150 + Math.random() * 100,
      width: 20 + Math.random() * 30,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.1,
    }))
    setRays(newRays)
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

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence>
          {rays.map((ray) => (
            <motion.div
              key={`${ray.id}-${currentIndex}`}
              className="absolute"
              style={{
                width: `${ray.length}px`,
                height: `${ray.width}px`,
                background: `linear-gradient(90deg, transparent, ${ray.color}, transparent)`,
                transform: `rotate(${ray.angle}deg)`,
                transformOrigin: "center left",
                filter: "blur(8px)",
                mixBlendMode: "screen",
              }}
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.8, 0],
                rotate: [`${ray.angle}deg`, `${ray.angle + 360 * prismSpeed}deg`],
              }}
              transition={{
                duration: 4 / prismSpeed,
                delay: ray.delay,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent, ${ray.color}, transparent)`,
                  mixBlendMode: "screen",
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        <motion.div
          className="absolute w-40 h-40"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(8px)",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            mixBlendMode: "screen",
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8 / prismSpeed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
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

export default Carousel88 