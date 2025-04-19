"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  parallaxStrength?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  parallaxStrength = 100,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? parallaxStrength : -parallaxStrength,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -parallaxStrength : parallaxStrength,
      opacity: 0,
      scale: 0.95,
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
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative w-full max-w-4xl h-96 mx-auto overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white rounded-lg p-3 hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous Slide"
      >
        <span className="block transform group-hover:-translate-x-1 transition-transform">
          ←
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white rounded-lg p-3 hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next Slide"
      >
        <span className="block transform group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-1.5 transition-all duration-300 ${
              currentIndex === index ? "w-8 bg-white" : "w-4 bg-white/50"
            } rounded-full hover:bg-white/80`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs rounded px-2 py-1 opacity-0 transition-opacity group-hover:opacity-100">
              {index + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carousel 