"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  radius?: number
  rotationAngle?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  radius = 400,
  rotationAngle = 45,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState(0)

  const itemCount = children.length
  const angleStep = 360 / itemCount

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % itemCount)
    setRotation((prev) => prev - angleStep)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount)
    setRotation((prev) => prev + angleStep)
  }

  const getItemStyle = (index: number) => {
    const angle = (index * angleStep + rotation) * (Math.PI / 180)
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius
    const scale = (z + radius) / (2 * radius)
    const opacity = scale

    return {
      position: "absolute",
      transform: `translate3d(${x}px, 0, ${z}px) rotateY(${-angle * (180 / Math.PI)}deg)`,
      zIndex: Math.floor(scale * 100),
      opacity,
      filter: `brightness(${scale * 100}%)`,
    }
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(400px)",
        }}
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 w-80 h-80"
            style={{
              ...getItemStyle(index),
              transformOrigin: "center center",
              marginLeft: "-160px",
              marginTop: "-160px",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
              {child}
            </div>
          </motion.div>
        ))}
      </motion.div>

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
                setRotation((prev) => prev - diff * angleStep)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white scale-125"
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

      {/* Rotation Angle Control */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => setRotation((prev) => prev + rotationAngle)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Rotate Left"
        >
          ↺
        </button>
        <span className="text-white/80 text-sm">Rotate</span>
        <button
          onClick={() => setRotation((prev) => prev - rotationAngle)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Rotate Right"
        >
          ↻
        </button>
      </div>
    </div>
  )
}

export default Carousel 