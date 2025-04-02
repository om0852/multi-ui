"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel106Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  foldSpeed?: number
}

const Carousel106 = ({
  children,
  autoPlay = false,
  interval = 3000,
  foldSpeed = 1,
}: Carousel106Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden bg-gradient-to-br from-emerald-900 to-teal-900"
      style={{ perspective: "2000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, rotateY: -90, rotateX: 45 }}
          animate={{
            opacity: 1,
            rotateY: 0,
            rotateX: 0,
            transition: { duration: 0.8 / foldSpeed, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            rotateY: 90,
            rotateX: -45,
            transition: { duration: 0.8 / foldSpeed, ease: "easeIn" },
          }}
        >
          {children[currentIndex]}
          
          {/* Fold Lines */}
          <motion.div
            className="absolute inset-0 border-t-2 border-white/20"
            style={{ transformOrigin: "top" }}
            animate={{ rotateX: [0, -30, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 border-b-2 border-white/20"
            style={{ transformOrigin: "bottom" }}
            animate={{ rotateX: [0, 30, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 -translate-y-1/2 z-10">
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </motion.button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {children.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/30"
            }`}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel106 