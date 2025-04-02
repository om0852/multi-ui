"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel42Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  shatterPieces?: number
  shatterForce?: number
}

const Carousel42 = ({
  children,
  autoPlay = false,
  interval = 3000,
  shatterPieces = 12,
  shatterForce = 1,
}: Carousel42Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [shatterElements, setShatterElements] = useState<Array<{ id: number; x: number; y: number; rotation: number }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateShatterElements()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateShatterElements()
  }

  const generateShatterElements = () => {
    const elements = Array.from({ length: shatterPieces }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
    }))
    setShatterElements(elements)
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {shatterElements.map((element) => (
          <motion.div
            key={`${element.id}-${currentIndex}`}
            className="absolute w-8 h-8 bg-white/20 backdrop-blur-sm"
            style={{
              clipPath: `polygon(${Math.random() * 100}% 0%, 100% ${Math.random() * 100}%, ${Math.random() * 100}% 100%, 0% ${Math.random() * 100}%)`,
            }}
            initial={{ 
              x: `${element.x}%`,
              y: `${element.y}%`,
              rotate: 0,
              scale: 1,
              opacity: 1
            }}
            animate={{
              x: `${element.x + (Math.random() - 0.5) * 100 * shatterForce}%`,
              y: `${element.y + (Math.random() - 0.5) * 100 * shatterForce}%`,
              rotate: element.rotation,
              scale: 0,
              opacity: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
          />
        ))}
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors z-10"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors z-10"
      >
        →
      </button>
    </div>
  )
}

export default Carousel42 