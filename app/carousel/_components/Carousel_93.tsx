"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel93Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  vortexCount?: number
  plasmaSpeed?: number
}

const Carousel93 = ({
  children,
  autoPlay = false,
  interval = 3000,
  vortexCount = 3,
  plasmaSpeed = 1,
}: Carousel93Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [vortices, setVortices] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    rotation: number
    color: string
    delay: number
  }>>([])

  const colors = [
    "rgba(236, 72, 153, 0.6)",  // Pink
    "rgba(219, 39, 119, 0.6)",  // Deep Pink
    "rgba(244, 114, 182, 0.6)", // Light Pink
    "rgba(251, 207, 232, 0.6)", // Pale Pink
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateVortices()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateVortices()
  }

  const generateVortices = () => {
    const newVortices = Array.from({ length: vortexCount }, (_, i) => ({
      id: i,
      position: {
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
      },
      size: 100 + Math.random() * 200,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 0.2,
    }))
    setVortices(newVortices)
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

      <AnimatePresence>
        {vortices.map((vortex) => (
          <motion.div
            key={`${vortex.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${vortex.position.x}%`,
              top: `${vortex.position.y}%`,
              width: `${vortex.size}px`,
              height: `${vortex.size}px`,
              transform: `translate(-50%, -50%) rotate(${vortex.rotation}deg)`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0.8, 1],
              opacity: [0, 0.8, 0.5, 0],
              rotate: [`${vortex.rotation}deg`, `${vortex.rotation + 720}deg`],
            }}
            transition={{
              duration: 4 / plasmaSpeed,
              delay: vortex.delay,
              ease: "easeInOut",
            }}
          >
            {/* Plasma Core */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `conic-gradient(from ${vortex.rotation}deg at 50% 50%, 
                  ${vortex.color} 0%, 
                  transparent 25%, 
                  ${vortex.color} 50%, 
                  transparent 75%, 
                  ${vortex.color} 100%)`,
                filter: "blur(20px)",
                mixBlendMode: "screen",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 / plasmaSpeed,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Plasma Tendrils */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at ${50 + Math.cos(i * Math.PI / 2) * 30}% ${50 + Math.sin(i * Math.PI / 2) * 30}%, 
                    ${vortex.color} 0%, 
                    transparent 70%)`,
                  filter: "blur(10px)",
                  mixBlendMode: "screen",
                }}
                animate={{
                  rotate: [i * 90, i * 90 + 360],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 / plasmaSpeed,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(236,72,153,0.1) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
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

export default Carousel93 