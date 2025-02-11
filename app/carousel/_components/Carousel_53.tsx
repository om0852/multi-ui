"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel53Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  pullStrength?: number
  pullRadius?: number
}

const Carousel53 = ({
  children,
  autoPlay = false,
  interval = 3000,
  pullStrength = 1,
  pullRadius = 100,
}: Carousel53Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPulling, setIsPulling] = useState(false)

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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
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
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPulling(false)
      }}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsPulling(true)}
      onMouseUp={() => setIsPulling(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
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
          style={{
            filter: "url(#magnetic-distortion)",
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ display: "none" }}>
        <defs>
          <filter id="magnetic-distortion">
            <feGaussianBlur in="SourceGraphic" stdDeviation={isPulling ? pullStrength * 2 : 0} />
            <feDisplacementMap
              in="SourceGraphic"
              scale={isPulling ? pullStrength * 20 : 0}
              xChannelSelector="R"
              yChannelSelector="G"
            >
              <animate
                attributeName="scale"
                values={`${pullStrength * 20};0;${pullStrength * 20}`}
                dur="2s"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>

      <motion.div
        className="absolute pointer-events-none mix-blend-screen"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          width: `${pullRadius * 2}px`,
          height: `${pullRadius * 2}px`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: isPulling ? [1, 1.2, 1] : 1,
          opacity: isPulling ? [0.2, 0.4, 0.2] : 0.2,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
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

export default Carousel53 