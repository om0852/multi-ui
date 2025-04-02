"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect, useRef } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  rainSpeed?: number
  rainDensity?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  rainSpeed = 1,
  rainDensity = 50,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = new Array(columns).fill(0)
    const chars = "ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ0123456789"

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0F0"
      ctx.font = "15px monospace"

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() < rainDensity / 100) {
          const char = chars[Math.floor(Math.random() * chars.length)]
          const x = i * 20
          const y = drops[i] * 20

          ctx.fillText(char, x, y)

          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }

          drops[i]++
        }
      }

      requestAnimationFrame(() => setTimeout(draw, 50 / rainSpeed))
    }

    draw()

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [rainSpeed, rainDensity])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-gray-900"
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
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full">
                {children[currentIndex]}
              </div>

              {/* Matrix Rain Overlay */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
              />

              {/* Digital Glitch Effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(0deg, rgba(0,255,0,0.1) 0%, transparent 100%)",
                  mixBlendMode: "overlay",
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
                  ? "w-8 bg-green-500"
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

      {/* Rain Speed Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => rainSpeed > 0.5 && (rainSpeed -= 0.25)}
          className="text-white hover:text-green-300 transition-colors"
          aria-label="Decrease speed"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Speed</span>
        <button
          onClick={() => rainSpeed < 2 && (rainSpeed += 0.25)}
          className="text-white hover:text-green-300 transition-colors"
          aria-label="Increase speed"
        >
          +
        </button>
      </div>

      {/* Rain Density Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => rainDensity > 20 && (rainDensity -= 10)}
          className="text-white hover:text-green-300 transition-colors"
          aria-label="Decrease density"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Density</span>
        <button
          onClick={() => rainDensity < 100 && (rainDensity += 10)}
          className="text-white hover:text-green-300 transition-colors"
          aria-label="Increase density"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 