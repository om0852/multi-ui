"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  magnetStrength?: number
  attractionRadius?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  magnetStrength = 50,
  attractionRadius = 200,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [contentPosition, setContentPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  useEffect(() => {
    const calculateAttraction = () => {
      const dx = mousePosition.x - window.innerWidth / 2
      const dy = mousePosition.y - window.innerHeight / 2
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < attractionRadius) {
        const force = (1 - distance / attractionRadius) * magnetStrength
        setContentPosition({
          x: (dx / distance) * force,
          y: (dy / distance) * force,
        })
      } else {
        setContentPosition({ x: 0, y: 0 })
      }
    }

    calculateAttraction()
  }, [mousePosition, magnetStrength, attractionRadius])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setContentPosition({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-[400px] h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: contentPosition.x,
              y: contentPosition.y,
            }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full">
                {children[currentIndex]}
              </div>

              {/* Magnetic Field Effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(
                    circle at ${mousePosition.x}px ${mousePosition.y}px,
                    rgba(255,255,255,0.2) 0%,
                    transparent 70%
                  )`,
                }}
              />

              {/* Attraction Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <radialGradient id="attractionGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + Math.cos((i * Math.PI) / 4) * 100}%`}
                    y2={`${50 + Math.sin((i * Math.PI) / 4) * 100}%`}
                    stroke="url(#attractionGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isHovered ? 1 : 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                ))}
              </svg>
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

      {/* Magnetic Strength Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => magnetStrength > 20 && (magnetStrength -= 10)}
          className="text-white hover:text-purple-300 transition-colors"
          aria-label="Decrease strength"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Force</span>
        <button
          onClick={() => magnetStrength < 100 && (magnetStrength += 10)}
          className="text-white hover:text-purple-300 transition-colors"
          aria-label="Increase strength"
        >
          +
        </button>
      </div>

      {/* Attraction Radius Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => attractionRadius > 100 && (attractionRadius -= 50)}
          className="text-white hover:text-purple-300 transition-colors"
          aria-label="Decrease radius"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Range</span>
        <button
          onClick={() => attractionRadius < 400 && (attractionRadius += 50)}
          className="text-white hover:text-purple-300 transition-colors"
          aria-label="Increase radius"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 