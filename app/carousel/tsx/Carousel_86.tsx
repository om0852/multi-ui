"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel86Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  nodeCount?: number
  pulseSpeed?: number
}

const Carousel86 = ({
  children,
  autoPlay = false,
  interval = 3000,
  nodeCount = 15,
  pulseSpeed = 1,
}: Carousel86Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [nodes, setNodes] = useState<Array<{
    id: number
    position: { x: number; y: number }
    size: number
    color: string
    connections: number[]
    delay: number
  }>>([])

  const colors = [
    "rgba(59, 130, 246, 0.6)",
    "rgba(99, 102, 241, 0.6)",
    "rgba(139, 92, 246, 0.6)",
    "rgba(167, 139, 250, 0.6)",
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
    generateNodes()
  }, [children.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
    generateNodes()
  }

  const generateNodes = () => {
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      position: {
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
      },
      size: 4 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      connections: Array.from({ length: 2 + Math.floor(Math.random() * 3) }, () =>
        Math.floor(Math.random() * nodeCount)
      ),
      delay: i * 0.1,
    }))
    setNodes(newNodes)
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

      <svg className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          {nodes.map((node) =>
            node.connections.map((targetId, index) => {
              const target = nodes[targetId]
              if (!target) return null
              return (
                <motion.line
                  key={`${node.id}-${targetId}-${index}-${currentIndex}`}
                  x1={`${node.position.x}%`}
                  y1={`${node.position.y}%`}
                  x2={`${target.position.x}%`}
                  y2={`${target.position.y}%`}
                  stroke={node.color}
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2 / pulseSpeed,
                    delay: node.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )
            })
          )}
        </AnimatePresence>
      </svg>

      <AnimatePresence>
        {nodes.map((node) => (
          <motion.div
            key={`${node.id}-${currentIndex}`}
            className="absolute rounded-full"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              left: `${node.position.x}%`,
              top: `${node.position.y}%`,
              background: node.color,
              boxShadow: `0 0 ${node.size * 2}px ${node.color}`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8, 1],
              opacity: [0, 1, 0.5, 1],
            }}
            transition={{
              duration: 2 / pulseSpeed,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(99,102,241,0.1) 0%, transparent 70%)",
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

export default Carousel86 