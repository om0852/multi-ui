"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  rippleCount?: number
  rippleSpeed?: number
}

interface Ripple {
  id: number
  x: number
  y: number
  scale: number
  opacity: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  rippleCount = 3,
  rippleSpeed = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  const createRipple = (x: number, y: number) => {
    const newRipples = Array.from({ length: rippleCount }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      scale: 0,
      opacity: 0.8,
    }))
    setRipples((prev) => [...prev, ...newRipples])
    setTimeout(() => {
      setRipples((prev) => prev.slice(rippleCount))
    }, 1000 * rippleSpeed)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  const nextSlide = () => {
    createRipple(50, 50) // Center ripple for auto-play
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
    }, 500)
  }

  const prevSlide = () => {
    createRipple(50, 50) // Center ripple for auto-play
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
    }, 500)
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-[400px] h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full">
                {children[currentIndex]}
              </div>

              {/* Ripple Effect */}
              {ripples.map((ripple, index) => (
                <motion.div
                  key={ripple.id}
                  className="absolute inset-0 pointer-events-none"
                  initial={{
                    scale: 0,
                    opacity: 0.8,
                    x: `${ripple.x}%`,
                    y: `${ripple.y}%`,
                  }}
                  animate={{
                    scale: [0, 4],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 1 * rippleSpeed,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                >
                  <div
                    className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                    }}
                  />
                </motion.div>
              ))}

              {/* Interactive Hover Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
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
              onClick={() => {
                createRipple(50, 50)
                setTimeout(() => {
                  setCurrentIndex(index)
                }, 500)
              }}
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

      {/* Ripple Count Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => rippleCount > 1 && (rippleCount -= 1)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Decrease ripples"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Ripples</span>
        <button
          onClick={() => rippleCount < 5 && (rippleCount += 1)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Increase ripples"
        >
          +
        </button>
      </div>

      {/* Speed Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => rippleSpeed > 0.5 && (rippleSpeed -= 0.25)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Decrease speed"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Speed</span>
        <button
          onClick={() => rippleSpeed < 2 && (rippleSpeed += 0.25)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Increase speed"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 