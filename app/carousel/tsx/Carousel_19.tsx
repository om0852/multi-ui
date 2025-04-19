"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  waveAmplitude?: number
  waveFrequency?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  waveAmplitude = 100,
  waveFrequency = 2,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [time, setTime] = useState(0)

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
  }, [time])

  const animate = () => {
    setTime((prev) => prev + 0.01)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  const getWavePosition = (index: number) => {
    const position = index - currentIndex
    const isVisible = Math.abs(position) <= 2

    if (!isVisible) return { display: "none" }

    const x = position * 300
    const baseY = Math.sin((time + position) * waveFrequency) * waveAmplitude
    const scale = 1 - Math.abs(position) * 0.2
    const y = baseY * scale
    const rotation = Math.cos((time + position) * waveFrequency) * 15 * scale

    return {
      x,
      y,
      rotation,
      scale,
      opacity: scale,
    }
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence>
          {children.map((child, index) => {
            const style = getWavePosition(index)
            if (style.display === "none") return null

            return (
              <motion.div
                key={index}
                className="absolute w-80 h-80"
                initial={false}
                animate={{
                  x: style.x,
                  y: style.y,
                  rotate: style.rotation,
                  scale: style.scale,
                  opacity: style.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform-gpu">
                  {/* Wave Effect Overlay */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(${style.rotation}deg,
                        rgba(255,255,255,0.1) 0%,
                        rgba(255,255,255,0.2) 50%,
                        rgba(255,255,255,0.1) 100%
                      )`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {child}
                  </div>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-2 border-white/20 rounded-full"
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{
                          scale: [0.8, 1.2],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.4,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    ))}
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

      {/* Wave Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => waveAmplitude > 50 && (waveAmplitude -= 10)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Decrease wave amplitude"
        >
          ▼
        </button>
        <span className="text-white/80 text-sm">Wave</span>
        <button
          onClick={() => waveAmplitude < 150 && (waveAmplitude += 10)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Increase wave amplitude"
        >
          ▲
        </button>
      </div>

      {/* Frequency Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => waveFrequency > 1 && (waveFrequency -= 0.5)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Decrease frequency"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Speed</span>
        <button
          onClick={() => waveFrequency < 4 && (waveFrequency += 0.5)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Increase frequency"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 