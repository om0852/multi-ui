"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel102Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  effectIntensity?: number
  effectSpeed?: number
}

const Carousel102 = ({
  children,
  autoPlay = false,
  interval = 3000,
  effectIntensity = 1,
  effectSpeed = 1,
}: Carousel102Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [effects, setEffects] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    color: string
    rotation: number
    delay: number
  }>>([])

  const colors = [
    "rgba(244, 63, 94, 0.6)",  // Rose
    "rgba(168, 85, 247, 0.6)", // Purple
    "rgba(45, 212, 191, 0.6)", // Teal
    "rgba(251, 191, 36, 0.6)", // Amber
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateEffects()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateEffects()
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    generateEffects()
  }

  const generateEffects = () => {
    const newEffects = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      size: 100 + Math.random() * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      delay: i * 0.15,
    }))
    setEffects(newEffects)
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)",
            transition: {
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Aesthetic Effects */}
      <AnimatePresence>
        {effects.map((effect) => (
          <motion.div
            key={`${effect.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              left: `${effect.position.x}%`,
              top: `${effect.position.y}%`,
              width: `${effect.size}px`,
              height: `${effect.size}px`,
              background: `radial-gradient(circle at center, ${effect.color} 0%, transparent 70%)`,
              transform: `rotate(${effect.rotation}deg)`,
              filter: "blur(20px)",
              mixBlendMode: "screen",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6 * effectIntensity, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [effect.rotation, effect.rotation + 180],
            }}
            transition={{
              duration: 3 / effectSpeed,
              delay: effect.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Interactive Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        animate={{
          opacity: isHovered ? 0.4 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between items-center px-4 -translate-y-1/2">
        <motion.button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </motion.button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center items-center gap-2">
        {children.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-8 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-white" : "bg-white/30"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentIndex === index && (
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-purple-500"
                layoutId="activePagination"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Corner Decorations */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32"
          style={{
            top: i < 2 ? -16 : "auto",
            bottom: i >= 2 ? -16 : "auto",
            left: i % 2 === 0 ? -16 : "auto",
            right: i % 2 === 1 ? -16 : "auto",
            background: `conic-gradient(from ${90 * i}deg, transparent, ${colors[i]})`,
            opacity: 0.3,
            filter: "blur(30px)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 8 / effectSpeed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default Carousel102 