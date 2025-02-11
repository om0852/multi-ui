"use client"

import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
}

const Carousel: React.FC<CarouselProps> = ({ children, autoPlay = false, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 80,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
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
    <div className="relative w-full max-w-3xl h-80 mx-auto overflow-hidden rounded-xl shadow-xl border-2 border-gray-300 bg-gray-900">
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 text-white rounded-full p-3 hover:bg-gray-600"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/70 text-white rounded-full p-3 hover:bg-gray-600"
        aria-label="Next Slide"
      >
        ❯
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white border border-gray-900 scale-110"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
