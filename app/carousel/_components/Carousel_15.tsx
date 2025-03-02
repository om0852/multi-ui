"use client"

import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  spread?: number
  tilt?: number
}

const floatAnimation = {
  initial: (index: number) => ({
    y: 50 + index * 10,
    opacity: 0,
  }),
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.1,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  exit: (index: number) => ({
    y: -50 - index * 10,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  }),
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  spread = 400,
  tilt = 45,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const visibleItems = 5
  const itemCount = children.length

  useEffect(() => {
    if (autoPlay && !isHovered && !isDragging) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered, isDragging])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % itemCount)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount)
  }

  const getVisibleIndices = () => {
    const indices = []
    for (let i = -Math.floor(visibleItems / 2); i <= Math.floor(visibleItems / 2); i++) {
      indices.push((currentIndex + i + itemCount) % itemCount)
    }
    return indices
  }

  const getItemStyle = (index: number) => {
    const position = index - currentIndex
    const absPosition = Math.abs(position)
    const isVisible = absPosition <= Math.floor(visibleItems / 2)

    if (!isVisible) return { display: "none", scale: 1 }

    const x = position * spread
    const scale = 1 - absPosition * 0.2
    const opacity = 1 - absPosition * 0.3

    return {
      x,
      scale: scale >= 0 ? scale : 1,
      opacity,
    }
  }

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {getVisibleIndices().map((index) => (
          <motion.div
            key={index}
            className="absolute w-[80%] max-w-3xl"
            custom={index}
            variants={floatAnimation}
            initial="initial"
            exit="exit"
            animate={{
              x: getItemStyle(index).x,
              scale: getItemStyle(index).scale,
              opacity: getItemStyle(index).opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            whileHover={{ scale: getItemStyle(index).scale !== undefined ? getItemStyle(index).scale * 1.05 : 1 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-grab bg-white/10 backdrop-blur-sm">
              {/* Main Content */}
              <div className="w-full h-full">
                {children[index]}
              </div>

              {/* Reflection Effect */}
              <div
                className="absolute left-0 right-0 bottom-0 h-1/2 transform scale-y-[-1] opacity-30"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
                  maskImage: "linear-gradient(to bottom, white 20%, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, white 20%, transparent)",
                }}
              >
                {children[index]}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        <button
          onClick={prevSlide}
          className="bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          ←
        </button>
        <div className="flex space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>

      {/* Tilt Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => tilt > 15 && (tilt -= 5)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Decrease tilt"
        >
          ↙
        </button>
        <span className="text-white/80 text-sm">Tilt</span>
        <button
          onClick={() => tilt < 75 && (tilt += 5)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Increase tilt"
        >
          ↗
        </button>
      </div>

      {/* Spread Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => spread > 200 && (spread -= 50)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Decrease spread"
        >
          ↔
        </button>
        <span className="text-white/80 text-sm">Spread</span>
        <button
          onClick={() => spread < 600 && (spread += 50)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Increase spread"
        >
          ⇔
        </button>
      </div>
    </div>
  )
}

export default Carousel 