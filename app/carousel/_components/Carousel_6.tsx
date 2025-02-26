"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  perspective?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  perspective = 1000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slideVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      scale: 0.8,
      opacity: 0,
      z: -perspective,
    }),
    center: {
      rotateY: 0,
      scale: 1,
      opacity: 1,
      z: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.2,
      },
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      scale: 0.8,
      opacity: 0,
      z: -perspective,
      transition: {
        duration: 0.5,
      },
    }),
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative w-full max-w-4xl h-96 mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: `${perspective}px` }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous Slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next Slide"
      >
        →
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel 