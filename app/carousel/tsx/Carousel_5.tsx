"use client"

import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
}

const Carousel: React.FC<CarouselProps> = ({ children, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: direction > 0 ? 0.8 : 1.2,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 20,
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: direction > 0 ? 1.2 : 0.8,
      transition: {
        duration: 0.6,
      },
    }),
  }

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval])

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
    <div className="relative w-full max-w-4xl h-96 mx-auto overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full flex items-center justify-center"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 text-white rounded-full p-3 hover:scale-105 transition-transform"
        aria-label="Previous Slide"
      >
        ❰
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 text-white rounded-full p-3 hover:scale-105 transition-transform"
        aria-label="Next Slide"
      >
        ❱
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-400 hover:bg-white"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
