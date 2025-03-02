"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  scanlineSpeed?: number
  glowIntensity?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  scanlineSpeed = 1,
  glowIntensity = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [scanlineOffset, setScanlineOffset] = useState(0)

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  useEffect(() => {
    const animate = () => {
      setScanlineOffset((prev) => (prev + 1 * scanlineSpeed) % 100)
      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animation)
  }, [scanlineSpeed])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
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
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full">
                {children[currentIndex]}
              </div>

              {/* Hologram Overlay */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen"
                style={{
                  background: `
                    linear-gradient(
                      ${scanlineOffset}deg,
                      transparent 0%,
                      rgba(32, 216, 255, 0.1) 10%,
                      transparent 20%
                    ),
                    linear-gradient(
                      transparent 50%,
                      rgba(32, 216, 255, 0.1) 50.5%,
                      transparent 51%
                    )
                  `,
                  backgroundSize: "100% 100%, 100% 4px",
                }}
              />

              {/* Scanlines */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(32, 216, 255, 0.1) 3px,
                    rgba(32, 216, 255, 0.1) 3px
                  )`,
                  transform: `translateY(${scanlineOffset}%)`,
                }}
              />

              {/* Glowing Edges */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: `
                    inset 0 0 ${20 * glowIntensity}px rgba(32, 216, 255, 0.5),
                    0 0 ${30 * glowIntensity}px rgba(32, 216, 255, 0.3)
                  `,
                }}
              />

              {/* Holographic Flicker */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen"
                style={{
                  opacity: 0.1 + Math.random() * 0.1,
                  background: "linear-gradient(45deg, transparent 40%, rgba(32, 216, 255, 0.3) 50%, transparent 60%)",
                  backgroundSize: "200% 200%",
                  animation: "flicker 5s linear infinite",
                }}
              />
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

      {/* Scanline Speed Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => scanlineSpeed > 0.5 && (scanlineSpeed -= 0.25)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Decrease speed"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Scan</span>
        <button
          onClick={() => scanlineSpeed < 2 && (scanlineSpeed += 0.25)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Increase speed"
        >
          +
        </button>
      </div>

      {/* Glow Intensity Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => glowIntensity > 0.5 && (glowIntensity -= 0.25)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Decrease glow"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Glow</span>
        <button
          onClick={() => glowIntensity < 2 && (glowIntensity += 0.25)}
          className="text-white hover:text-cyan-300 transition-colors"
          aria-label="Increase glow"
        >
          →
        </button>
      </div>

      {/* Add CSS keyframes for flicker animation */}
      <style jsx global>{`
        @keyframes flicker {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

export default Carousel 