"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel64Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  dropletCount?: number
  flowSpeed?: number
}

const Carousel64 = ({
  children,
  autoPlay = false,
  interval = 3000,
  dropletCount = 20,
  flowSpeed = 1,
}: Carousel64Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [droplets, setDroplets] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
    rotation: number
  }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateDroplets()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateDroplets()
  }

  const generateDroplets = () => {
    const newDroplets = Array.from({ length: dropletCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 50 + Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: (0.5 + Math.random() * 0.5) / flowSpeed,
      rotation: Math.random() * 360,
    }))
    setDroplets(newDroplets)
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
        {droplets.map((droplet) => (
          <motion.div
            key={`${droplet.id}-${currentIndex}`}
            className="absolute"
            style={{
              left: `${droplet.x}%`,
              top: `${droplet.y}%`,
              width: `${droplet.size}px`,
              height: `${droplet.size}px`,
              background: "linear-gradient(135deg, rgba(192,192,192,0.8) 0%, rgba(128,128,128,0.4) 100%)",
              borderRadius: "50%",
              filter: "blur(8px)",
              transformOrigin: "center",
            }}
            initial={{
              scale: 0,
              opacity: 0,
              rotate: droplet.rotation,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [droplet.rotation, droplet.rotation + 180],
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: droplet.duration,
              delay: droplet.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(45deg, rgba(255,255,255,0.4) 0%, transparent 100%)",
                borderRadius: "50%",
                transform: "rotate(45deg)",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(192,192,192,0.2) 0%, transparent 70%)",
          mixBlendMode: "overlay",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
          mixBlendMode: "overlay",
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

export default Carousel64 