"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"
import Image from "next/image"

interface CarouselProps {
  items: {
    id: number | string
    image: string
    title: string
    description?: string
  }[]
  autoPlay?: boolean
  interval?: number
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slideVariants = {
    enter: {
      scale: 1.2,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[500px] rounded-xl overflow-hidden bg-gray-900 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={items[currentIndex].image}
                alt={items[currentIndex].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {items[currentIndex].title}
                  </motion.h2>
                  {items[currentIndex].description && (
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-lg text-gray-200"
                    >
                      {items[currentIndex].description}
                    </motion.p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
          aria-label="Previous Slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex justify-center gap-2 px-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`relative group ${
              currentIndex === index ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className="relative w-20 h-20 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  currentIndex === index ? "opacity-100" : "opacity-50 group-hover:opacity-75"
                }`}
              />
            </div>
            <div
              className={`absolute inset-0 border-2 rounded-lg transition-colors ${
                currentIndex === index
                  ? "border-blue-500"
                  : "border-transparent group-hover:border-blue-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carousel 