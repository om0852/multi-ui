"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  glitchIntensity?: number
  glitchFrequency?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  glitchIntensity = 1,
  glitchFrequency = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1 * glitchFrequency) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 150)
      }
    }, 1000 / glitchFrequency)

    return () => clearInterval(glitchInterval)
  }, [glitchFrequency])

  const nextSlide = () => {
    setIsGlitching(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
      setIsGlitching(false)
    }, 150)
  }

  const prevSlide = () => {
    setIsGlitching(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
      setIsGlitching(false)
    }, 150)
  }

  const getGlitchStyles = () => {
    if (!isGlitching) return {}

    const intensity = 10 * glitchIntensity
    return {
      clipPath: `polygon(
        ${Math.random() * intensity}% 0%,
        ${100 - Math.random() * intensity}% 0%,
        ${100 - Math.random() * intensity}% ${Math.random() * intensity}%,
        ${Math.random() * intensity}% ${100 - Math.random() * intensity}%,
        ${100 - Math.random() * intensity}% 100%,
        ${Math.random() * intensity}% ${100 - Math.random() * intensity}%
      )`,
      filter: `hue-rotate(${Math.random() * 360}deg) saturate(${2 + Math.random() * 3})`,
      transform: `translate(${(Math.random() - 0.5) * intensity}px, ${
        (Math.random() - 0.5) * intensity
      }px)`,
    }
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-[400px] h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full" style={getGlitchStyles()}>
                {children[currentIndex]}
              </div>

              {/* Glitch Layers */}
              {isGlitching && (
                <>
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-50"
                    style={{
                      ...getGlitchStyles(),
                      left: `${(Math.random() - 0.5) * 10 * glitchIntensity}px`,
                      top: `${(Math.random() - 0.5) * 10 * glitchIntensity}px`,
                      filter: "hue-rotate(90deg)",
                    }}
                  >
                    {children[currentIndex]}
                  </div>
                  <div
                    className="absolute inset-0 mix-blend-screen opacity-50"
                    style={{
                      ...getGlitchStyles(),
                      left: `${(Math.random() - 0.5) * 10 * glitchIntensity}px`,
                      top: `${(Math.random() - 0.5) * 10 * glitchIntensity}px`,
                      filter: "hue-rotate(-90deg)",
                    }}
                  >
                    {children[currentIndex]}
                  </div>
                </>
              )}

              {/* Scan Lines */}
              <div className="absolute inset-0 pointer-events-none bg-scan-lines opacity-10" />
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
                setIsGlitching(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsGlitching(false)
                }, 150)
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

      {/* Intensity Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => glitchIntensity > 0.5 && (glitchIntensity -= 0.25)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Decrease intensity"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Intensity</span>
        <button
          onClick={() => glitchIntensity < 2 && (glitchIntensity += 0.25)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Increase intensity"
        >
          +
        </button>
      </div>

      {/* Frequency Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => glitchFrequency > 0.5 && (glitchFrequency -= 0.25)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Decrease frequency"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Rate</span>
        <button
          onClick={() => glitchFrequency < 2 && (glitchFrequency += 0.25)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Increase frequency"
        >
          →
        </button>
      </div>

      {/* CRT Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, transparent 60%, black 150%)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  )
}

export default Carousel 