"use client"
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import React, { useEffect, useState } from 'react'

interface SliderPaginationProps {
  totalSlides: number
  currentIndex: number
  onDotClick: (index: number) => void
}

export const SliderPagination: React.FC<SliderPaginationProps> = ({ totalSlides, currentIndex, onDotClick }) => {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

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
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1 === children.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? children.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, nextSlide])

  const handleDragEnd = (event: PointerEvent, info: PanInfo) => {
    if (info.offset.x < -100) {
      nextSlide()
    } else if (info.offset.x > 100) {
      prevSlide()
    }
  }

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute w-full h-full"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
        aria-label="Previous slide"
      >
        <img
          src="https://img.icons8.com/ios-filled/50/000000/chevron-left.png"
          alt="Previous"
          className="w-6 h-6"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
        aria-label="Next slide"
      >
        <img
          src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png"
          alt="Next"
          className="w-6 h-6"
        />
      </button>
      <SliderPagination
        totalSlides={children.length}
        currentIndex={currentIndex}
        onDotClick={(index) => setCurrentIndex(index)}
      />
    </div>
  )
}

export default Carousel
