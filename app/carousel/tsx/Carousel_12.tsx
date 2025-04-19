"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  flipDirection?: "horizontal" | "vertical"
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  flipDirection = "horizontal",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)

  const flipVariants = {
    initial: {
      rotateX: flipDirection === "vertical" ? -90 : 0,
      rotateY: flipDirection === "horizontal" ? 90 : 0,
      opacity: 0,
    },
    animate: {
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      rotateX: flipDirection === "vertical" ? 90 : 0,
      rotateY: flipDirection === "horizontal" ? -90 : 0,
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  useEffect(() => {
    if (autoPlay && !isHovered && !isFlipping) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered, isFlipping])

  const nextSlide = async () => {
    if (isFlipping) return
    setIsFlipping(true)
    setCurrentIndex((prev) => (prev + 1) % children.length)
    setTimeout(() => setIsFlipping(false), 800)
  }

  const prevSlide = async () => {
    if (isFlipping) return
    setIsFlipping(true)
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
    setTimeout(() => setIsFlipping(false), 800)
  }

  const goToSlide = async (index: number) => {
    if (isFlipping || index === currentIndex) return
    setIsFlipping(true)
    setCurrentIndex(index)
    setTimeout(() => setIsFlipping(false), 800)
  }

  return (
    <div
      className="relative w-full max-w-4xl h-96 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1500px" }}
    >
      <div className="relative w-full h-full bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={flipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 backface-hidden">
              {children[currentIndex]}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevSlide}
            disabled={isFlipping}
            className={`transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-lg p-3 hover:bg-white/20 transition-all duration-300 ${
              isFlipping ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
            aria-label="Previous Slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            disabled={isFlipping}
            className={`transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-lg p-3 hover:bg-white/20 transition-all duration-300 ${
              isFlipping ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
            aria-label="Next Slide"
          >
            →
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isFlipping}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/80"
              } ${isFlipping ? "cursor-not-allowed" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Flip Direction Toggle */}
        <button
          onClick={() =>
            flipDirection === "horizontal"
              ? "vertical"
              : "horizontal"
          }
          className="absolute top-6 right-6 bg-black/20 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/30 transition-colors text-sm"
          aria-label="Toggle flip direction"
        >
          {flipDirection === "horizontal" ? "↔" : "↕"}
        </button>
      </div>
    </div>
  )
}

export default Carousel 