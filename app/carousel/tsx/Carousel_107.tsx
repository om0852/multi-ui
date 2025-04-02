"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel107Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  spiralSpeed?: number
}

const Carousel107 = ({
  children,
  autoPlay = false,
  interval = 3000,
  spiralSpeed = 1,
}: Carousel107Props) => {
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
      className="relative w-full h-[400px] overflow-hidden bg-gradient-to-br from-violet-900 to-indigo-900"
      style={{ perspective: "2000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
          initial={{ 
            opacity: 0,
            rotateZ: -180,
            scale: 0.5,
            z: -500
          }}
          animate={{
            opacity: 1,
            rotateZ: 0,
            scale: 1,
            z: 0,
            transition: { 
              duration: 0.8 / spiralSpeed,
              ease: [0.4, 0, 0.2, 1]
            },
          }}
          exit={{
            opacity: 0,
            rotateZ: 180,
            scale: 0.5,
            z: -500,
            transition: { 
              duration: 0.8 / spiralSpeed,
              ease: [0.4, 0, 0.2, 1]
            },
          }}
        >
          {children[currentIndex]}
          
          {/* Spiral Effect */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-white/10 rounded-full"
              style={{ 
                transformStyle: "preserve-3d",
                transform: `scale(${1 + i * 0.2}) rotateX(${60 + i * 10}deg)`,
              }}
              animate={{
                rotateZ: [0, 360],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
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

      {/* Ambient Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}

export default Carousel107 