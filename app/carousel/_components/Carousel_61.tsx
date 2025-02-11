"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel61Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  segmentCount?: number
  rotationSpeed?: number
}

const Carousel61 = ({
  children,
  autoPlay = false,
  interval = 3000,
  segmentCount = 8,
  rotationSpeed = 1,
}: Carousel61Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [segments, setSegments] = useState<Array<{
    id: number
    angle: number
    scale: number
    opacity: number
  }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateSegments()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateSegments()
  }

  const generateSegments = () => {
    const angleStep = 360 / segmentCount
    const newSegments = Array.from({ length: segmentCount }, (_, i) => ({
      id: i,
      angle: i * angleStep,
      scale: 0.8 + Math.random() * 0.4,
      opacity: 0.6 + Math.random() * 0.4,
    }))
    setSegments(newSegments)
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
          initial={{ opacity: 0, scale: 0.8 }}
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
            scale: 1.2,
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
        <div className="relative w-full h-full">
          <AnimatePresence>
            {segments.map((segment) => (
              <motion.div
                key={`${segment.id}-${currentIndex}`}
                className="absolute inset-0"
                style={{
                  transformOrigin: "center",
                  mixBlendMode: "screen",
                }}
                initial={{
                  rotate: segment.angle,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  rotate: [
                    segment.angle,
                    segment.angle + 360 * rotationSpeed,
                  ],
                  scale: [0, segment.scale, 0],
                  opacity: [0, segment.opacity, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: `conic-gradient(from ${segment.angle}deg, 
                      rgba(255,255,255,0.2) 0%, 
                      rgba(255,255,255,0.4) 25%, 
                      rgba(255,255,255,0.2) 50%, 
                      rgba(255,255,255,0.4) 75%, 
                      rgba(255,255,255,0.2) 100%)`,
                    clipPath: `polygon(50% 50%, 100% 0, 100% 100%)`,
                    filter: "blur(2px)",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
          mixBlendMode: "overlay",
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

export default Carousel61 