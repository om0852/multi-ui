"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel98Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  vortexLayers?: number
  timeSpeed?: number
}

const Carousel98 = ({
  children,
  autoPlay = false,
  interval = 3000,
  vortexLayers = 5,
  timeSpeed = 1,
}: Carousel98Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [layers, setLayers] = useState<Array<{
    id: number
    rotation: number
    scale: number
    color: string
  }>>([])

  const colors = [
    "rgba(234, 179, 8, 0.6)",   // Gold
    "rgba(217, 70, 239, 0.6)",  // Magenta
    "rgba(14, 165, 233, 0.6)",  // Cyan
    "rgba(139, 92, 246, 0.6)",  // Purple
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateLayers()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateLayers()
  }

  const generateLayers = () => {
    const newLayers = Array.from({ length: vortexLayers }, (_, i) => ({
      id: i,
      rotation: (360 / vortexLayers) * i,
      scale: 1 + (i * 0.2),
      color: colors[i % colors.length],
    }))
    setLayers(newLayers)
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
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, rotateZ: -180 }}
          animate={{
            opacity: 1,
            rotateZ: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            rotateZ: 180,
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Time Vortex */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence>
          {layers.map((layer) => (
            <motion.div
              key={`${layer.id}-${currentIndex}`}
              className="absolute w-[600px] h-[600px]"
              style={{
                border: `2px solid ${layer.color}`,
                borderRadius: "50%",
                transform: `scale(${layer.scale}) rotate(${layer.rotation}deg)`,
                boxShadow: `0 0 20px ${layer.color}`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                rotate: [layer.rotation, layer.rotation + 360],
                scale: [layer.scale * 0.8, layer.scale, layer.scale * 0.8],
              }}
              transition={{
                duration: 4 / timeSpeed,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </AnimatePresence>

        {/* Time Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)",
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360],
              x: [0, Math.cos(i * Math.PI / 10) * 200],
              y: [0, Math.sin(i * Math.PI / 10) * 200],
            }}
            transition={{
              duration: 2 / timeSpeed,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Time Distortion */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
            filter: "blur(10px)",
            mixBlendMode: "screen",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 / timeSpeed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

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

export default Carousel98 