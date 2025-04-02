"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel67Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  glitchIntensity?: number
  splitCount?: number
}

const Carousel67 = ({
  children,
  autoPlay = false,
  interval = 3000,
  glitchIntensity = 1,
  splitCount = 10,
}: Carousel67Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [splits, setSplits] = useState<Array<{
    id: number
    offset: number
    height: number
    delay: number
  }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateSplits()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateSplits()
  }

  const generateSplits = () => {
    const newSplits = Array.from({ length: splitCount }, (_, i) => ({
      id: i,
      offset: (Math.random() - 0.5) * 50 * glitchIntensity,
      height: 400 / splitCount,
      delay: Math.random() * 0.2,
    }))
    setSplits(newSplits)
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
        {splits.map((split, index) => (
          <motion.div
            key={`${split.id}-${currentIndex}`}
            className="absolute w-full"
            style={{
              height: `${split.height}px`,
              top: `${index * split.height}px`,
              overflow: "hidden",
            }}
            initial={{
              x: 0,
              filter: "none",
            }}
            animate={{
              x: [0, split.offset, 0],
              filter: [
                "none",
                `hue-rotate(${Math.random() * 360}deg) saturate(${2 + Math.random() * 3}) brightness(1.2)`,
                "none",
              ],
            }}
            transition={{
              duration: 0.5,
              delay: split.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-full h-[400px]"
              style={{
                transform: `translateY(-${index * split.height}px)`,
              }}
            >
              {children[currentIndex]}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          background: "linear-gradient(45deg, rgba(255,0,0,0.2) 0%, transparent 100%)",
        }}
        animate={{
          opacity: [0, 0.5, 0],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 0.3,
          repeat: 2,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          background: "linear-gradient(-45deg, rgba(0,255,255,0.2) 0%, transparent 100%)",
        }}
        animate={{
          opacity: [0, 0.5, 0],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 0.3,
          repeat: 2,
          ease: "linear",
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

export default Carousel67 