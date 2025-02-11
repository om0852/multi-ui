"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  floatAmplitude?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  floatAmplitude = 20,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const getFloatingStyle = (index: number) => {
    const position = index - currentIndex
    const isVisible = Math.abs(position) <= 2

    if (!isVisible) return { display: "none" }

    const xOffset = position * 60 + mousePosition.x * floatAmplitude
    const yOffset = mousePosition.y * floatAmplitude
    const scale = 1 - Math.abs(position) * 0.2
    const zIndex = 10 - Math.abs(position)

    return {
      x: xOffset,
      y: yOffset,
      scale,
      zIndex,
      opacity: 1 - Math.abs(position) * 0.3,
    }
  }

  const floatAnimation = {
    initial: (index: number) => ({
      y: 50 + index * 10,
      opacity: 0,
    }),
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
    exit: (index: number) => ({
      y: -50 - index * 10,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-900"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {children.map((child, index) => {
            const style = getFloatingStyle(index)
            if (style.display === "none") return null

            return (
              <motion.div
                key={index}
                className="absolute w-[80%] max-w-3xl"
                custom={index}
                variants={floatAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  zIndex: style.zIndex,
                }}
                animate={{
                  x: style.x,
                  y: style.y,
                  scale: style.scale,
                  opacity: style.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
                whileHover={{ scale: style.scale * 1.05 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Glass Panel Effect */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {child}
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        animate={{
                          x: [0, Math.random() * 100 - 50],
                          y: [0, Math.random() * 100 - 50],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
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

      {/* Float Amplitude Control */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => floatAmplitude > 10 && (floatAmplitude -= 5)}
          className="text-white hover:text-teal-300 transition-colors"
          aria-label="Decrease float amplitude"
        >
          ↓
        </button>
        <span className="text-white/80 text-sm">Float</span>
        <button
          onClick={() => floatAmplitude < 40 && (floatAmplitude += 5)}
          className="text-white hover:text-teal-300 transition-colors"
          aria-label="Increase float amplitude"
        >
          ↑
        </button>
      </div>
    </div>
  )
}

export default Carousel 