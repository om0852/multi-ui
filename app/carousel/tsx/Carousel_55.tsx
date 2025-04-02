"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel55Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  shardCount?: number
  shatterRadius?: number
}

const Carousel55 = ({
  children,
  autoPlay = false,
  interval = 3000,
  shardCount = 30,
  shatterRadius = 100,
}: Carousel55Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [shards, setShards] = useState<Array<{
    id: number
    points: string
    x: number
    y: number
    rotation: number
    scale: number
  }>>([])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateShards()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateShards()
  }

  const generateShards = () => {
    const newShards = Array.from({ length: shardCount }, (_, i) => {
      const points = Array.from({ length: 6 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
        .sort((a, b) => Math.atan2(a.y - 50, a.x - 50) - Math.atan2(b.y - 50, b.x - 50))
        .map(p => `${p.x},${p.y}`)
        .join(" ")

      return {
        id: i,
        points,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
      }
    })
    setShards(newShards)
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
        {shards.map((shard) => (
          <motion.div
            key={`${shard.id}-${currentIndex}`}
            className="absolute pointer-events-none"
            style={{
              left: `${shard.x}%`,
              top: `${shard.y}%`,
              width: `${shatterRadius}px`,
              height: `${shatterRadius}px`,
              perspective: "1000px",
            }}
            initial={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
            }}
            animate={{
              opacity: [1, 0.8, 0],
              scale: [1, shard.scale, 0],
              rotateX: Math.random() * 360,
              rotateY: Math.random() * 360,
              rotateZ: shard.rotation,
              x: (Math.random() - 0.5) * 200,
              y: (Math.random() - 0.5) * 200,
              z: Math.random() * 500,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
                clipPath: `polygon(${shard.points})`,
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

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

export default Carousel55 