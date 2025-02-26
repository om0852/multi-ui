"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  warpIntensity?: number
  timeSpeed?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  warpIntensity = 1,
  timeSpeed = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isWarping, setIsWarping] = useState(false)
  const [warpProgress, setWarpProgress] = useState(0)

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  useEffect(() => {
    if (isWarping) {
      const animate = () => {
        setWarpProgress((prev) => {
          const next = prev + 0.02 * timeSpeed
          return next >= 1 ? 0 : next
        })
      }

      const frame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(frame)
    }
  }, [isWarping, warpProgress, timeSpeed])

  const nextSlide = () => {
    setIsWarping(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
      setIsWarping(false)
    }, 1000 * timeSpeed)
  }

  const prevSlide = () => {
    setIsWarping(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
      setIsWarping(false)
    }, 1000 * timeSpeed)
  }

  const getWarpStyles = () => {
    const progress = isWarping ? warpProgress : 0
    const scale = 1 + Math.sin(progress * Math.PI) * 0.2 * warpIntensity
    const rotate = Math.sin(progress * Math.PI * 2) * 10 * warpIntensity
    const translateX = Math.sin(progress * Math.PI * 4) * 20 * warpIntensity

    return {
      scale,
      rotate,
      translateX,
      filter: `hue-rotate(${progress * 360}deg) brightness(${1 + progress * 0.5})`,
    }
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-pink-900 via-red-900 to-orange-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-[400px] h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: getWarpStyles().scale,
              rotate: getWarpStyles().rotate,
              x: getWarpStyles().translateX,
            }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            style={{
              filter: getWarpStyles().filter,
            }}
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full">
                {children[currentIndex]}
              </div>

              {/* Time Warp Effect */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{
                  background: `
                    radial-gradient(circle at center,
                      transparent ${50 - warpProgress * 20}%,
                      rgba(255,255,255,0.2) ${60 - warpProgress * 20}%,
                      transparent ${70 - warpProgress * 20}%
                    ),
                    conic-gradient(
                      from ${warpProgress * 360}deg,
                      rgba(255,0,0,0.2),
                      rgba(0,255,255,0.2),
                      rgba(255,0,0,0.2)
                    )
                  `,
                }}
              />

              {/* Time Distortion Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M 0,${(i + 1) * 40} Q ${200 + Math.sin(warpProgress * Math.PI * 2) * 100},${
                      (i + 1) * 40
                    } 400,${(i + 1) * 40}`}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isWarping ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
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
              onClick={() => {
                setIsWarping(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsWarping(false)
                }, 1000 * timeSpeed)
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

      {/* Warp Intensity Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => warpIntensity > 0.5 && (warpIntensity -= 0.25)}
          className="text-white hover:text-pink-300 transition-colors"
          aria-label="Decrease intensity"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Warp</span>
        <button
          onClick={() => warpIntensity < 2 && (warpIntensity += 0.25)}
          className="text-white hover:text-pink-300 transition-colors"
          aria-label="Increase intensity"
        >
          +
        </button>
      </div>

      {/* Time Speed Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => timeSpeed > 0.5 && (timeSpeed -= 0.25)}
          className="text-white hover:text-pink-300 transition-colors"
          aria-label="Decrease speed"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Time</span>
        <button
          onClick={() => timeSpeed < 2 && (timeSpeed += 0.25)}
          className="text-white hover:text-pink-300 transition-colors"
          aria-label="Increase speed"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 