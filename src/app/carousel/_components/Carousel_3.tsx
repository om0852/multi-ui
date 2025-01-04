"use client"
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
}

const Carousel: React.FC<CarouselProps> = ({ children, autoPlay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      scale: 0.9,
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
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
    setCurrentIndex((prevIndex) => (prevIndex + 1 === children.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? children.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-72 overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg rounded-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="absolute w-full h-full flex items-center justify-center text-white font-bold text-3xl"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
