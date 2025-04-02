"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel108Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  prismSpeed?: number
}

const Carousel108 = ({
  children,
  autoPlay = false,
  interval = 3000,
  prismSpeed = 1,
}: Carousel108Props) => {
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
      className="relative w-full h-[400px] overflow-hidden bg-black"
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
            rotateY: -30,
            scale: 1.2
          }}
          animate={{
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: { 
              duration: 0.8 / prismSpeed,
              ease: [0.4, 0, 0.2, 1]
            },
          }}
          exit={{
            opacity: 0,
            rotateY: 30,
            scale: 0.8,
            transition: { 
              duration: 0.8 / prismSpeed,
              ease: [0.4, 0, 0.2, 1]
            },
          }}
        >
          {children[currentIndex]}
          
          {/* Prism Effects */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(45deg, rgba(255,0,0,0.2), rgba(0,255,0,0.2), rgba(0,0,255,0.2))",
              mixBlendMode: "screen",
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 10 / prismSpeed,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Rainbow Edges */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                border: "2px solid transparent",
                borderImage: `linear-gradient(${60 * i}deg, rgba(255,0,0,0.5), rgba(255,255,0,0.5), rgba(0,255,0,0.5), rgba(0,255,255,0.5), rgba(0,0,255,0.5), rgba(255,0,255,0.5)) 1`,
                transform: `scale(${1 + i * 0.05}) rotate(${i * 10}deg)`,
              }}
              animate={{
                rotate: [i * 10, i * 10 + 360],
                scale: [1 + i * 0.05, 1 + i * 0.08, 1 + i * 0.05],
              }}
              transition={{
                duration: 8 / prismSpeed,
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

      {/* Light Refraction */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

export default Carousel108 