"use client"

import { motion } from "framer-motion"
import React, { useState, useEffect, useRef } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 0,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
}) => {
  const [duplicatedChildren, setDuplicatedChildren] = useState<React.ReactNode[]>([])
  const [width, setWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Duplicate items to create seamless infinite scroll
    setDuplicatedChildren([...children, ...children, ...children])
  }, [children])

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / 3)
    }
  }, [duplicatedChildren])

  const shouldAnimate = autoPlay && !(pauseOnHover && isHovered)

  const infiniteScrollVariants = {
    animate: {
      x: direction === "left" ? -width : width,
      transition: {
        duration: width / speed,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
      },
    },
    hover: {
      animationPlayState: "paused",
    },
  }

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-8">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={carouselRef}
          className="flex"
          variants={infiniteScrollVariants}
          animate={shouldAnimate ? "animate" : ""}
          initial={{ x: 0 }}
        >
          {duplicatedChildren.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4"
              style={{ minWidth: "300px" }}
            >
              <div className="transform transition-transform hover:scale-105">
                {child}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-900 to-transparent pointer-events-none" />
      </div>

      {/* Optional interval-based navigation */}
      {interval > 0 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Speed Controls */}
      <div className="absolute top-4 right-4 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => speed > 10 && (speed -= 10)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Decrease speed"
        >
          🐢
        </button>
        <span className="text-white/80 text-sm">Speed</span>
        <button
          onClick={() => speed < 100 && (speed += 10)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Increase speed"
        >
          🐰
        </button>
      </div>

      {/* Direction Toggle */}
      <button
        onClick={() => direction === "left" ? "right" : "left"}
        className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/30 transition-colors"
        aria-label="Toggle direction"
      >
        {direction === "left" ? "⟵" : "⟶"}
      </button>
    </div>
  )
}

export default Carousel 