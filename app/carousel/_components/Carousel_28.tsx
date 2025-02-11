"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  maxTiltAngle?: number
  perspective?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  maxTiltAngle = 20,
  perspective = 1000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [tiltAngles, setTiltAngles] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setTiltAngles({
      x: (0.5 - y) * maxTiltAngle * 2,
      y: (x - 0.5) * maxTiltAngle * 2,
    })
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setTiltAngles({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
      style={{ perspective: `${perspective}px` }}
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
              rotateX: tiltAngles.x,
              rotateY: tiltAngles.y,
              z: 100,
            }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full">
                {children[currentIndex]}
              </div>

              {/* Lighting Effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(
                    ${135 + tiltAngles.y}deg,
                    rgba(255,255,255,0.15) 0%,
                    rgba(255,255,255,0) 50%,
                    rgba(0,0,0,0.1) 100%
                  )`,
                }}
              />

              {/* Edge Highlight */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: `
                    inset ${-tiltAngles.y}px ${-tiltAngles.x}px 20px rgba(255,255,255,0.1),
                    inset ${tiltAngles.y}px ${tiltAngles.x}px 20px rgba(0,0,0,0.1)
                  `,
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

      {/* Tilt Angle Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => maxTiltAngle > 10 && (maxTiltAngle -= 5)}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Decrease tilt"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Tilt</span>
        <button
          onClick={() => maxTiltAngle < 40 && (maxTiltAngle += 5)}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Increase tilt"
        >
          +
        </button>
      </div>

      {/* Perspective Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => perspective > 500 && (perspective -= 100)}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Decrease perspective"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Depth</span>
        <button
          onClick={() => perspective < 2000 && (perspective += 100)}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Increase perspective"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 