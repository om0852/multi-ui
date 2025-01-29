"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel57Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  arcCount?: number
  arcIntensity?: number
}

const Carousel57 = ({
  children,
  autoPlay = false,
  interval = 3000,
  arcCount = 8,
  arcIntensity = 1,
}: Carousel57Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [arcs, setArcs] = useState<Array<{
    id: number
    path: string
    color: string
    delay: number
  }>>([])

  const generateLightningPath = () => {
    const points = []
    let x = 0
    let y = Math.random() * 100

    while (x < 100) {
      x += Math.random() * 20
      y += (Math.random() - 0.5) * 40
      points.push(`${x},${y}`)
    }

    return `M0,50 ${points.map((p) => `L${p}`).join(" ")}`
  }

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
    const newArcs = Array.from({ length: arcCount }, (_, i) => ({
      id: i,
      path: generateLightningPath(),
      color: `rgba(100,181,246,${0.4 + Math.random() * 0.6})`,
      delay: Math.random() * 0.2,
    }))
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
        {arcs.map((arc) => (
          <motion.div
            key={`${arc.id}-${currentIndex}`}
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg
              className="w-full h-full"
              style={{
                filter: `blur(2px) brightness(${1 + arcIntensity})`,
              }}
            >
              <motion.path
                d={arc.path}
                stroke={arc.color}
                strokeWidth={2 + Math.random() * 2 * arcIntensity}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 1, 0],
                  strokeWidth: [
                    2 + Math.random() * 2 * arcIntensity,
                    4 + Math.random() * 4 * arcIntensity,
                    2 + Math.random() * 2 * arcIntensity,
                  ],
                }}
                transition={{
                  duration: 0.5,
                  delay: arc.delay,
                  ease: "easeOut",
                }}
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          background: "radial-gradient(circle at center, rgba(100,181,246,0.2) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 1,
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

export default Carousel57 