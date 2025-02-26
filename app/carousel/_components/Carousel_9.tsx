"use client"

import { motion, AnimatePresence, useAnimation, PanInfo } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  stackCount?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  stackCount = 3,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const wrap = (index: number, length: number) => {
    if (index < 0) return length - 1
    if (index >= length) return 0
    return index
  }

  const getStackStyles = (index: number) => {
    const position = index - currentIndex
    const isVisible = Math.abs(position) < stackCount

    if (!isVisible) return { display: "none" }

    const scale = 1 - Math.abs(position) * 0.1
    const zIndex = stackCount - Math.abs(position)

    return {
      scale,
      zIndex,
      y: Math.abs(position) * 20,
      opacity: 1 - Math.abs(position) * 0.2,
    }
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => wrap(prev + 1, children.length))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => wrap(prev - 1, children.length))
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    } else {
      controls.start({ x: 0 })
    }
  }

  return (
    <div
      className="relative w-full max-w-4xl mx-auto h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} mode="popLayout">
          {children.map((child, index) => {
            const stackStyle = getStackStyles(index)
            if (stackStyle.display === "none") return null

            return (
              <motion.div
                key={index}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  ...stackStyle,
                  transition: { duration: 0.5 },
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
                className="cursor-grab bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {child}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-6 bg-blue-500"
                : "bg-gray-400 hover:bg-blue-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 rounded-full p-3 shadow-lg hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 rounded-full p-3 shadow-lg hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  )
}

export default Carousel 