"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  particleCount?: number
  explosionForce?: number
}

interface Particle {
  id: number
  x: number
  y: number
  angle: number
  speed: number
  size: number
  opacity: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  particleCount = 50,
  explosionForce = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isExploding, setIsExploding] = useState(false)

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  const generateParticles = () => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: 0,
      y: 0,
      angle: (Math.PI * 2 * i) / particleCount,
      speed: Math.random() * 20 * explosionForce + 10,
      size: Math.random() * 6 + 2,
      opacity: 1,
    }))
  }

  const nextSlide = () => {
    setIsExploding(true)
    setParticles(generateParticles())
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
      setIsExploding(false)
    }, 500)
  }

  const prevSlide = () => {
    setIsExploding(true)
    setParticles(generateParticles())
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
      setIsExploding(false)
    }, 500)
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-amber-900 via-orange-900 to-red-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-[400px] h-[400px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Content */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              {children[currentIndex]}
            </div>

            {/* Particles */}
            {isExploding && (
              <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="absolute w-2 h-2 rounded-full bg-white"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos(particle.angle) * particle.speed * 20,
                      y: Math.sin(particle.angle) * particle.speed * 20,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    style={{
                      width: particle.size,
                      height: particle.size,
                      left: "50%",
                      top: "50%",
                      background: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)`,
                    }}
                  />
                ))}
              </div>
            )}
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
                setIsExploding(true)
                setParticles(generateParticles())
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsExploding(false)
                }, 500)
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

      {/* Particle Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => particleCount > 20 && (particleCount -= 10)}
          className="text-white hover:text-amber-300 transition-colors"
          aria-label="Decrease particles"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Particles</span>
        <button
          onClick={() => particleCount < 100 && (particleCount += 10)}
          className="text-white hover:text-amber-300 transition-colors"
          aria-label="Increase particles"
        >
          +
        </button>
      </div>

      {/* Force Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => explosionForce > 0.5 && (explosionForce -= 0.25)}
          className="text-white hover:text-amber-300 transition-colors"
          aria-label="Decrease force"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Force</span>
        <button
          onClick={() => explosionForce < 2 && (explosionForce += 0.25)}
          className="text-white hover:text-amber-300 transition-colors"
          aria-label="Increase force"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default Carousel 