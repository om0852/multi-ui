"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel73Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  cloudCount?: number
  swirlingSpeed?: number
}

const Carousel73 = ({
  children,
  autoPlay = false,
  interval = 3000,
  cloudCount = 6,
  swirlingSpeed = 1,
}: Carousel73Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [clouds, setClouds] = useState<Array<{
    id: number
    x: number
    y: number
    scale: number
    rotation: number
    color1: string
    color2: string
    delay: number
    path: number[][]
  }>>([])

  const colors = [
    ["#ff00ff", "#0000ff"],
    ["#ff0066", "#6600ff"],
    ["#9900ff", "#ff00cc"],
    ["#ff3366", "#3300ff"],
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateClouds()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateClouds()
  }

  const generateClouds = () => {
    const newClouds = Array.from({ length: cloudCount }, (_, i) => {
      const colorPair = colors[Math.floor(Math.random() * colors.length)]
      const controlPoints = Array.from({ length: 4 }, () => [
        Math.random() * 100,
        Math.random() * 100,
      ])
      
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 1 + Math.random() * 2,
        rotation: Math.random() * 360,
        color1: colorPair[0],
        color2: colorPair[1],
        delay: i * 0.2,
        path: controlPoints,
      }
    })
    setClouds(newClouds)
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
        {clouds.map((cloud) => (
          <motion.div
            key={`${cloud.id}-${currentIndex}`}
            className="absolute"
            style={{
              width: "300px",
              height: "300px",
              filter: "blur(40px)",
              mixBlendMode: "screen",
            }}
            initial={{
              x: `${cloud.path[0][0]}%`,
              y: `${cloud.path[0][1]}%`,
              scale: 0,
              opacity: 0,
              rotate: cloud.rotation,
            }}
            animate={{
              x: cloud.path.map(p => `${p[0]}%`),
              y: cloud.path.map(p => `${p[1]}%`),
              scale: [0, cloud.scale, 0],
              opacity: [0, 0.6, 0],
              rotate: [cloud.rotation, cloud.rotation + 360 * swirlingSpeed],
            }}
            transition={{
              duration: 4 / swirlingSpeed,
              delay: cloud.delay,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `radial-gradient(circle at center, ${cloud.color1}66 0%, ${cloud.color2}66 100%)`,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
          mixBlendMode: "overlay",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, transparent 70%)",
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

export default Carousel73 