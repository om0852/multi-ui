"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  neonColor?: string
  pulseSpeed?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  neonColor = "#ff00ff",
  pulseSpeed = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [pulsePhase, setPulsePhase] = useState(0)

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
      setPulsePhase((prev) => (prev + 0.02 * pulseSpeed) % (Math.PI * 2))
      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animation)
  }, [pulseSpeed])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  const getNeonStyles = () => {
    const intensity = (Math.sin(pulsePhase) + 1) / 2
    const color = neonColor
    const rgb = color.match(/\w\w/g)?.map((x) => parseInt(x, 16))
    
    return {
      boxShadow: `
        0 0 10px rgba(${rgb?.[0]}, ${rgb?.[1]}, ${rgb?.[2]}, ${0.3 + intensity * 0.7}),
        0 0 20px rgba(${rgb?.[0]}, ${rgb?.[1]}, ${rgb?.[2]}, ${0.2 + intensity * 0.5}),
        0 0 30px rgba(${rgb?.[0]}, ${rgb?.[1]}, ${rgb?.[2]}, ${0.1 + intensity * 0.3})
      `,
      filter: `brightness(${1 + intensity * 0.5})`,
    }
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
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
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            style={getNeonStyles()}
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full">
                {children[currentIndex]}
              </div>

              {/* Neon Border */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: `2px solid ${neonColor}`,
                  boxShadow: getNeonStyles().boxShadow,
                }}
              />

              {/* Neon Corner Accents */}
              {[0, 1, 2, 3].map((corner) => (
                <div
                  key={corner}
                  className="absolute w-8 h-8 pointer-events-none"
                  style={{
                    top: corner < 2 ? "-2px" : "auto",
                    bottom: corner >= 2 ? "-2px" : "auto",
                    left: corner % 2 === 0 ? "-2px" : "auto",
                    right: corner % 2 === 1 ? "-2px" : "auto",
                    borderTop: corner < 2 ? `2px solid ${neonColor}` : "none",
                    borderBottom: corner >= 2 ? `2px solid ${neonColor}` : "none",
                    borderLeft: corner % 2 === 0 ? `2px solid ${neonColor}` : "none",
                    borderRight: corner % 2 === 1 ? `2px solid ${neonColor}` : "none",
                    boxShadow: getNeonStyles().boxShadow,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        <button
          onClick={prevSlide}
          className="bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          style={{ textShadow: `0 0 10px ${neonColor}` }}
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
                  ? "w-8"
                  : "hover:bg-white/80"
              }`}
              style={{
                backgroundColor: currentIndex === index ? neonColor : "rgba(255,255,255,0.5)",
                boxShadow: currentIndex === index ? getNeonStyles().boxShadow : "none",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          style={{ textShadow: `0 0 10px ${neonColor}` }}
          aria-label="Next Slide"
        >
          →
        </button>
      </div>

      {/* Color Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        {["#ff00ff", "#00ffff", "#ffff00", "#ff0000", "#00ff00"].map((color) => (
          <button
            key={color}
            onClick={() => neonColor = color}
            className="w-6 h-6 rounded-full transition-transform hover:scale-125"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
            }}
            aria-label={`Set neon color to ${color}`}
          />
        ))}
      </div>

      {/* Pulse Speed Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => pulseSpeed > 0.5 && (pulseSpeed -= 0.25)}
          className="text-white hover:text-purple-300 transition-colors"
          style={{ textShadow: `0 0 10px ${neonColor}` }}
          aria-label="Decrease pulse speed"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Pulse</span>
        <button
          onClick={() => pulseSpeed < 2 && (pulseSpeed += 0.25)}
          className="text-white hover:text-purple-300 transition-colors"
          style={{ textShadow: `0 0 10px ${neonColor}` }}
          aria-label="Increase pulse speed"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 