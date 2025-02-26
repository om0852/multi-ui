"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel48Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  waveAmplitude?: number
  waveFrequency?: number
}

const Carousel48 = ({
  children,
  autoPlay = false,
  interval = 3000,
  waveAmplitude = 20,
  waveFrequency = 1,
}: Carousel48Props) => {
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
      className="relative w-full h-[400px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ 
            opacity: 0,
            filter: "url(#wave-distortion)"
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ display: "none" }}>
        <defs>
          <filter id="wave-distortion">
            <feTurbulence
              type="turbulence"
              baseFrequency={`${0.01 * waveFrequency} ${0.01 * waveFrequency}`}
              numOctaves="3"
              seed="1"
            >
              <animate
                attributeName="baseFrequency"
                dur="30s"
                values={`${0.01 * waveFrequency} ${0.01 * waveFrequency};${0.02 * waveFrequency} ${0.02 * waveFrequency};${0.01 * waveFrequency} ${0.01 * waveFrequency}`}
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              scale={waveAmplitude}
            />
          </filter>
        </defs>
      </svg>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

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

export default Carousel48