"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel74Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  arcCount?: number
  fieldIntensity?: number
}

const Carousel74 = ({
  children,
  autoPlay = false,
  interval = 3000,
  arcCount = 6,
  fieldIntensity = 1,
}: Carousel74Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [arcs, setArcs] = useState<Array<{
    id: number
    startX: number
    startY: number
    endX: number
    endY: number
    color: string
    delay: number
    controlPoint1: number[]
    controlPoint2: number[]
  }>>([])

  const colors = [
    "#00ffff",
    "#0066ff",
    "#00ccff",
    "#0099ff",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateArcs()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateArcs()
  }

  const generateArcs = () => {
    const newArcs = Array.from({ length: arcCount }, (_, i) => {
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      const endX = startX + (Math.random() - 0.5) * 50
      const endY = startY + (Math.random() - 0.5) * 50
      
      return {
        id: i,
        startX,
        startY,
        endX,
        endY,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: i * 0.1,
        controlPoint1: [
          startX + (Math.random() - 0.5) * 50,
          startY + (Math.random() - 0.5) * 50,
        ],
        controlPoint2: [
          endX + (Math.random() - 0.5) * 50,
          endY + (Math.random() - 0.5) * 50,
        ],
      }
    })
    setArcs(newArcs)
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
        <AnimatePresence>
          {arcs.map((arc) => (
            <motion.path
              key={`${arc.id}-${currentIndex}`}
              d={`M ${arc.startX} ${arc.startY} C ${arc.controlPoint1[0]} ${arc.controlPoint1[1]}, ${arc.controlPoint2[0]} ${arc.controlPoint2[1]}, ${arc.endX} ${arc.endY}`}
              stroke={arc.color}
              strokeWidth={2 * fieldIntensity}
              fill="none"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0],
                strokeWidth: [
                  2 * fieldIntensity,
                  4 * fieldIntensity,
                  2 * fieldIntensity,
                ],
              }}
              transition={{
                duration: 1,
                delay: arc.delay,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
              style={{
                filter: `blur(${2 * fieldIntensity}px) brightness(1.5)`,
              }}
            />
          ))}
        </AnimatePresence>
      </svg>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(0,128,255,${0.1 * fieldIntensity}) 0%, transparent 70%)`,
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
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
          background: "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, transparent 70%)",
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

export default Carousel74 