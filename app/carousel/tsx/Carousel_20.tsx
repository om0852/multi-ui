"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  segments?: number
  rotationSpeed?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  segments = 8,
  rotationSpeed = 2,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [rotation])

  const animate = () => {
    setRotation((prev) => prev + rotationSpeed)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  const generateSegments = () => {
    const segmentAngle = 360 / segments
    return Array.from({ length: segments }).map((_, i) => ({
      rotation: i * segmentAngle + rotation,
      scale: 1 + Math.sin(rotation * 0.02 + i * 0.5) * 0.1,
    }))
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-fuchsia-900 via-purple-900 to-indigo-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full">
              {/* Kaleidoscope Effect */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {generateSegments().map((segment, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-full h-full origin-center"
                    style={{
                      clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((index * 360) / segments) * Math.PI / 180}% ${50 + 50 * Math.sin((index * 360) / segments) * Math.PI / 180}%, ${50 + 50 * Math.cos(((index + 1) * 360) / segments) * Math.PI / 180}% ${50 + 50 * Math.sin(((index + 1) * 360) / segments) * Math.PI / 180}%)`,
                    }}
                    animate={{
                      rotate: segment.rotation,
                      scale: segment.scale,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-full h-full transform-gpu">
                      {children[currentIndex]}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
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

      {/* Segment Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => segments > 4 && (segments -= 2)}
          className="text-white hover:text-fuchsia-300 transition-colors"
          aria-label="Decrease segments"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Segments</span>
        <button
          onClick={() => segments < 16 && (segments += 2)}
          className="text-white hover:text-fuchsia-300 transition-colors"
          aria-label="Increase segments"
        >
          +
        </button>
      </div>

      {/* Speed Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => rotationSpeed > 0.5 && (rotationSpeed -= 0.5)}
          className="text-white hover:text-fuchsia-300 transition-colors"
          aria-label="Decrease speed"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Speed</span>
        <button
          onClick={() => rotationSpeed < 5 && (rotationSpeed += 0.5)}
          className="text-white hover:text-fuchsia-300 transition-colors"
          aria-label="Increase speed"
        >
          →
        </button>
      </div>

      {/* Mirror Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>
    </div>
  )
}

export default Carousel 