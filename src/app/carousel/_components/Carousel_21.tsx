"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  liquidSpeed?: number
  morphIntensity?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  liquidSpeed = 2,
  morphIntensity = 1,
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
    setTime((prev) => prev + 0.01 * liquidSpeed)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  const getLiquidPath = () => {
    const points = 8
    const radius = 150
    const path = Array.from({ length: points + 1 }).map((_, i) => {
      const angle = (i / points) * Math.PI * 2
      const noise = Math.sin(time + i * 2) * 30 * morphIntensity
      const x = Math.cos(angle) * (radius + noise) + 200
      const y = Math.sin(angle) * (radius + noise) + 200
      return `${i === 0 ? "M" : "L"} ${x} ${y}`
    })
    return path.join(" ") + " Z"
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Liquid Mask */}
              <svg
                className="absolute w-[400px] h-[400px]"
                viewBox="0 0 400 400"
                style={{ filter: "url(#goo)" }}
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="goo"
                    />
                  </filter>
                </defs>
                <motion.path
                  d={getLiquidPath()}
                  fill="white"
                  animate={{ d: getLiquidPath() }}
                  transition={{ duration: 0.01 }}
                />
              </svg>

              {/* Content */}
              <div className="w-[400px] h-[400px] overflow-hidden">
                <div className="w-full h-full transform-gpu">
                  {children[currentIndex]}
                </div>
              </div>

              {/* Liquid Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute inset-0 backdrop-blur-[1px]" />
              </div>
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

      {/* Speed Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => liquidSpeed > 0.5 && (liquidSpeed -= 0.5)}
          className="text-white hover:text-rose-300 transition-colors"
          aria-label="Decrease speed"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Speed</span>
        <button
          onClick={() => liquidSpeed < 4 && (liquidSpeed += 0.5)}
          className="text-white hover:text-rose-300 transition-colors"
          aria-label="Increase speed"
        >
          +
        </button>
      </div>

      {/* Intensity Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => morphIntensity > 0.5 && (morphIntensity -= 0.25)}
          className="text-white hover:text-rose-300 transition-colors"
          aria-label="Decrease intensity"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Morph</span>
        <button
          onClick={() => morphIntensity < 2 && (morphIntensity += 0.25)}
          className="text-white hover:text-rose-300 transition-colors"
          aria-label="Increase intensity"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 