"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel83Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  shapeCount?: number
  morphSpeed?: number
}

const Carousel83 = ({
  children,
  autoPlay = false,
  interval = 3000,
  shapeCount = 8,
  morphSpeed = 1,
}: Carousel83Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [shapes, setShapes] = useState<Array<{
    id: number
    points: number
    size: number
    color: string
    delay: number
    rotation: number
    position: { x: number; y: number }
  }>>([])

  const colors = [
    "rgba(255, 100, 100, 0.4)",
    "rgba(100, 255, 100, 0.4)",
    "rgba(100, 100, 255, 0.4)",
    "rgba(255, 255, 100, 0.4)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateShapes()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateShapes()
  }

  const generateShapes = () => {
    const newShapes = Array.from({ length: shapeCount }, (_, i) => ({
      id: i,
      points: Math.floor(3 + Math.random() * 5), // 3 to 7 points
      size: 50 + Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.2,
      rotation: Math.random() * 360,
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
    }))
    setShapes(newShapes)
  }

  const generatePolygonPoints = (points: number, size: number) => {
    const angleStep = (Math.PI * 2) / points
    return Array.from({ length: points }, (_, i) => {
      const angle = i * angleStep
      return `${Math.cos(angle) * size},${Math.sin(angle) * size}`
    }).join(" ")
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
        {shapes.map((shape) => (
          <motion.div
            key={`${shape.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${shape.position.x}%`,
              top: `${shape.position.y}%`,
              transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
          >
            <motion.svg
              width={shape.size}
              height={shape.size}
              viewBox={`-50 -50 100 100`}
              style={{
                filter: "blur(2px)",
                mixBlendMode: "screen",
              }}
              animate={{
                rotate: [0, 360],
                scale: [0, 1, 0.5, 1, 0],
                opacity: [0, 0.8, 0.4, 0.8, 0],
              }}
              transition={{
                duration: 4 / morphSpeed,
                delay: shape.delay,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
            >
              <motion.polygon
                points={generatePolygonPoints(shape.points, 40)}
                fill={shape.color}
                stroke={shape.color}
                strokeWidth="2"
                animate={{
                  points: [
                    generatePolygonPoints(shape.points, 40),
                    generatePolygonPoints(shape.points + 1, 45),
                    generatePolygonPoints(shape.points - 1, 35),
                    generatePolygonPoints(shape.points, 40),
                  ],
                }}
                transition={{
                  duration: 2 / morphSpeed,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.svg>
          </motion.div>
        ))}
      </AnimatePresence>

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

export default Carousel83 