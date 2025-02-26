"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel58Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  foldSegments?: number
  foldAngle?: number
}

interface FoldSegment {
  id: number
  clipPath: string
  rotateX: number
  rotateY: number
  translateZ: number
  delay: number
}

const Carousel58 = ({
  children,
  autoPlay = false,
  interval = 3000,
  foldSegments = 4,
  foldAngle = 45,
}: Carousel58Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [segments, setSegments] = useState<FoldSegment[]>([])
  const [direction, setDirection] = useState<"left" | "right">("right")

  const nextSlide = useCallback(() => {
    setDirection("right")
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateSegments("right")
  }, [children.length])

  const prevSlide = () => {
    setDirection("left")
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateSegments("left")
  }

  const generateSegments = (dir: "left" | "right") => {
    const newSegments = Array.from({ length: foldSegments }, (_, i) => {
      const segmentWidth = 100 / foldSegments
      const x1 = i * segmentWidth
      const x2 = (i + 1) * segmentWidth

      return {
        id: i,
        clipPath: `polygon(${x1}% 0%, ${x2}% 0%, ${x2}% 100%, ${x1}% 100%)`,
        rotateX: Math.random() * 30 - 15,
        rotateY: dir === "right" ? foldAngle : -foldAngle,
        translateZ: Math.random() * 100,
        delay: i * 0.1,
      }
    })
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
      style={{
        perspective: "1000px",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            rotateY: direction === "right" ? 90 : -90,
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            rotateY: direction === "right" ? -90 : 90,
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {segments.map((segment) => (
          <motion.div
            key={`${segment.id}-${currentIndex}`}
            className="absolute inset-0"
            style={{
              clipPath: segment.clipPath,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            initial={{
              opacity: 1,
              rotateX: 0,
              rotateY: 0,
              translateZ: 0,
            }}
            animate={{
              opacity: [1, 1, 0],
              rotateX: [0, segment.rotateX, 0],
              rotateY: [0, segment.rotateY, 0],
              translateZ: [0, segment.translateZ, 0],
            }}
            transition={{
              duration: 1,
              delay: segment.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

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

export default Carousel58 