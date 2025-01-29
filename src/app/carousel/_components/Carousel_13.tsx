"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  zoomFactor?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  zoomFactor = 1.5,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [focusPoint, setFocusPoint] = useState({ x: 0.5, y: 0.5 })

  const slideVariants = {
    enter: {
      scale: zoomFactor,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
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
    setCurrentIndex((prev) => (prev + 1) % children.length)
    setRandomFocusPoint()
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
    setRandomFocusPoint()
  }

  const setRandomFocusPoint = () => {
    setFocusPoint({
      x: 0.3 + Math.random() * 0.4, // Random between 0.3 and 0.7
      y: 0.3 + Math.random() * 0.4,
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setFocusPoint({ x, y })
  }

  return (
    <div
      className="relative w-full max-w-5xl h-[600px] mx-auto overflow-hidden bg-black rounded-3xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{
            transformOrigin: `${focusPoint.x * 100}% ${focusPoint.y * 100}%`,
          }}
        >
          <div className="relative w-full h-full">
            {children[currentIndex]}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Focus Point Indicator (visible when hovered) */}
      {isHovered && (
        <motion.div
          className="absolute w-8 h-8 pointer-events-none"
          style={{
            left: `${focusPoint.x * 100}%`,
            top: `${focusPoint.y * 100}%`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <div className="absolute inset-0 border-2 border-white rounded-full opacity-50 animate-ping" />
          <div className="absolute inset-2 bg-white rounded-full opacity-75" />
        </motion.div>
      )}

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      <div className="absolute inset-0 flex items-center justify-between p-6">
        <button
          onClick={prevSlide}
          className="transform bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="transform bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>

      {/* Navigation and Zoom Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setRandomFocusPoint()
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Zoom Factor Control */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => zoomFactor > 1.2 && (zoomFactor -= 0.1)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Decrease zoom"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Zoom</span>
        <button
          onClick={() => zoomFactor < 2.5 && (zoomFactor += 0.1)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Increase zoom"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Carousel 