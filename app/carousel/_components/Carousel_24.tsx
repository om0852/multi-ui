"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  shatterPieces?: number
  shatterForce?: number
}

interface ShatterPiece {
  id: number
  clipPath: string
  x: number
  y: number
  rotate: number
  scale: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  shatterPieces = 12,
  shatterForce = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isShattered, setIsShattered] = useState(false)
  const [pieces, setPieces] = useState<ShatterPiece[]>([])

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  const generateShatterPieces = () => {
    const newPieces: ShatterPiece[] = []
    const rows = Math.ceil(Math.sqrt(shatterPieces))
    const cols = Math.ceil(shatterPieces / rows)
    const cellWidth = 100 / cols
    const cellHeight = 100 / rows

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (newPieces.length >= shatterPieces) break

        const x1 = j * cellWidth
        const y1 = i * cellHeight
        const x2 = x1 + cellWidth
        const y2 = y1 + cellHeight

        // Add some randomness to the clip path
        const variance = 5
        const points = [
          [x1 + (Math.random() - 0.5) * variance, y1 + (Math.random() - 0.5) * variance],
          [x2 + (Math.random() - 0.5) * variance, y1 + (Math.random() - 0.5) * variance],
          [x2 + (Math.random() - 0.5) * variance, y2 + (Math.random() - 0.5) * variance],
          [x1 + (Math.random() - 0.5) * variance, y2 + (Math.random() - 0.5) * variance],
        ]

        newPieces.push({
          id: i * cols + j,
          clipPath: `polygon(${points.map((p) => `${p[0]}% ${p[1]}%`).join(", ")})`,
          x: (Math.random() - 0.5) * 200 * shatterForce,
          y: (Math.random() - 0.5) * 200 * shatterForce,
          rotate: (Math.random() - 0.5) * 360 * shatterForce,
          scale: Math.random() * 0.5 + 0.5,
        })
      }
    }

    return newPieces
  }

  const nextSlide = () => {
    setIsShattered(true)
    setPieces(generateShatterPieces())
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
      setIsShattered(false)
    }, 600)
  }

  const prevSlide = () => {
    setIsShattered(true)
    setPieces(generateShatterPieces())
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
      setIsShattered(false)
    }, 600)
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-[400px] h-[400px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              {!isShattered && (
                <div className="w-full h-full">
                  {children[currentIndex]}
                </div>
              )}

              {/* Shatter Effect */}
              {isShattered && (
                <div className="absolute inset-0">
                  {pieces.map((piece) => (
                    <motion.div
                      key={piece.id}
                      className="absolute inset-0"
                      initial={{ clipPath: piece.clipPath }}
                      animate={{
                        x: piece.x,
                        y: piece.y,
                        rotate: piece.rotate,
                        scale: piece.scale,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    >
                      {children[currentIndex]}
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none" />
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
                setIsShattered(true)
                setPieces(generateShatterPieces())
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsShattered(false)
                }, 600)
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

      {/* Pieces Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => shatterPieces > 6 && (shatterPieces -= 3)}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Decrease pieces"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Pieces</span>
        <button
          onClick={() => shatterPieces < 24 && (shatterPieces += 3)}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Increase pieces"
        >
          +
        </button>
      </div>

      {/* Force Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => shatterForce > 0.5 && (shatterForce -= 0.25)}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Decrease force"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Force</span>
        <button
          onClick={() => shatterForce < 2 && (shatterForce += 0.25)}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Increase force"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 