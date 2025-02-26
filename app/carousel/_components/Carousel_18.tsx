"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  spiralRadius?: number
  spiralTurns?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  spiralRadius = 300,
  spiralTurns = 1.5,
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
    setRotation((prev) => prev - 360)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
    setRotation((prev) => prev + 360)
  }

  const getSpiralPosition = (index: number) => {
    const position = index - currentIndex
    const angle = (position / children.length) * Math.PI * 2 * spiralTurns + (rotation * Math.PI) / 180
    const radius = spiralRadius * (1 - Math.abs(position) / (children.length * 2))
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    const scale = 1 - Math.abs(position) / children.length
    const zIndex = Math.floor((1 - Math.abs(position) / children.length) * 100)

    return {
      x,
      y,
      scale,
      zIndex,
      opacity: scale,
      rotateZ: angle * (180 / Math.PI),
    }
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-violet-900 via-indigo-900 to-blue-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence>
          {children.map((child, index) => {
            const style = getSpiralPosition(index)
            return (
              <motion.div
                key={index}
                className="absolute w-80 h-80"
                initial={false}
                animate={{
                  x: style.x,
                  y: style.y,
                  scale: style.scale,
                  rotateZ: style.rotateZ,
                  opacity: style.opacity,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  zIndex: style.zIndex,
                }}
                whileHover={{ scale: style.scale * 1.1 }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform-gpu">
                  {/* Glass Effect */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {child}
                  </div>

                  {/* Spiral Trail Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `conic-gradient(from ${style.rotateZ}deg at 50% 50%, 
                          rgba(255,255,255,0.2) 0%, 
                          transparent 60%, 
                          rgba(255,255,255,0.2) 100%
                        )`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
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
                const diff = index - currentIndex
                setCurrentIndex(index)
                setRotation((prev) => prev - diff * 360)
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

      {/* Spiral Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => spiralTurns > 0.5 && (spiralTurns -= 0.5)}
          className="text-white hover:text-violet-300 transition-colors"
          aria-label="Decrease spiral turns"
        >
          ↺
        </button>
        <span className="text-white/80 text-sm">Spiral</span>
        <button
          onClick={() => spiralTurns < 3 && (spiralTurns += 0.5)}
          className="text-white hover:text-violet-300 transition-colors"
          aria-label="Increase spiral turns"
        >
          ↻
        </button>
      </div>

      {/* Radius Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => spiralRadius > 200 && (spiralRadius -= 50)}
          className="text-white hover:text-violet-300 transition-colors"
          aria-label="Decrease radius"
        >
          ◀
        </button>
        <span className="text-white/80 text-sm">Radius</span>
        <button
          onClick={() => spiralRadius < 500 && (spiralRadius += 50)}
          className="text-white hover:text-violet-300 transition-colors"
          aria-label="Increase radius"
        >
          ▶
        </button>
      </div>
    </div>
  )
}

export default Carousel 