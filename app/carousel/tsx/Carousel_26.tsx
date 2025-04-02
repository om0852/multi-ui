"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  foldCount?: number
  foldAngle?: number
}

interface FoldSegment {
  id: number
  clipPath: string
  rotateX: number
  rotateY: number
  translateZ: number
  opacity: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  foldCount = 8,
  foldAngle = 45,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFolding, setIsFolding] = useState(false)
  const [foldDirection, setFoldDirection] = useState<"horizontal" | "vertical">("horizontal")

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  const generateFoldSegments = (direction: "horizontal" | "vertical"): FoldSegment[] => {
    const segments: FoldSegment[] = []
    const segmentSize = 100 / foldCount

    for (let i = 0; i < foldCount; i++) {
      const start = i * segmentSize
      const end = start + segmentSize

      segments.push({
        id: i,
        clipPath: direction === "horizontal"
          ? `polygon(0% ${start}%, 100% ${start}%, 100% ${end}%, 0% ${end}%)`
          : `polygon(${start}% 0%, ${end}% 0%, ${end}% 100%, ${start}% 100%)`,
        rotateX: direction === "horizontal" ? foldAngle : 0,
        rotateY: direction === "vertical" ? foldAngle : 0,
        translateZ: 100,
        opacity: 1,
      })
    }

    return segments
  }

  const nextSlide = () => {
    setIsFolding(true)
    setFoldDirection(Math.random() > 0.5 ? "horizontal" : "vertical")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
      setIsFolding(false)
    }, 600)
  }

  const prevSlide = () => {
    setIsFolding(true)
    setFoldDirection(Math.random() > 0.5 ? "horizontal" : "vertical")
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
      setIsFolding(false)
    }, 600)
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-[400px] h-[400px] perspective-[1000px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Main Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              {!isFolding && (
                <div className="w-full h-full">
                  {children[currentIndex]}
                </div>
              )}

              {/* Fold Effect */}
              {isFolding && (
                <div className="absolute inset-0 transform-style-3d">
                  {generateFoldSegments(foldDirection).map((segment) => (
                    <motion.div
                      key={segment.id}
                      className="absolute inset-0"
                      initial={{
                        clipPath: segment.clipPath,
                        rotateX: 0,
                        rotateY: 0,
                        translateZ: 0,
                      }}
                      animate={{
                        rotateX: segment.rotateX,
                        rotateY: segment.rotateY,
                        translateZ: segment.translateZ,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.645, 0.045, 0.355, 1],
                        delay: segment.id * 0.05,
                      }}
                      style={{
                        clipPath: segment.clipPath,
                        transformOrigin: foldDirection === "horizontal" ? "center top" : "left center",
                      }}
                    >
                      {children[currentIndex]}
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        <button
          onClick={prevSlide}
          className="bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          ←
        </button>
        <div className="flex space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsFolding(true)
                setFoldDirection(Math.random() > 0.5 ? "horizontal" : "vertical")
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsFolding(false)
                }, 600)
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>

      {/* Fold Count Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => foldCount > 4 && (foldCount -= 2)}
          className="text-white hover:text-slate-300 transition-colors"
          aria-label="Decrease folds"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Folds</span>
        <button
          onClick={() => foldCount < 12 && (foldCount += 2)}
          className="text-white hover:text-slate-300 transition-colors"
          aria-label="Increase folds"
        >
          +
        </button>
      </div>

      {/* Angle Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => foldAngle > 30 && (foldAngle -= 15)}
          className="text-white hover:text-slate-300 transition-colors"
          aria-label="Decrease angle"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Angle</span>
        <button
          onClick={() => foldAngle < 90 && (foldAngle += 15)}
          className="text-white hover:text-slate-300 transition-colors"
          aria-label="Increase angle"
        >
          →
        </button>
      </div>

      {/* Direction Toggle */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => setFoldDirection("horizontal")}
          className={`text-white transition-colors ${
            foldDirection === "horizontal" ? "text-slate-300" : "hover:text-slate-300"
          }`}
          aria-label="Horizontal fold"
        >
          ↕
        </button>
        <span className="text-white/80 text-sm">|</span>
        <button
          onClick={() => setFoldDirection("vertical")}
          className={`text-white transition-colors ${
            foldDirection === "vertical" ? "text-slate-300" : "hover:text-slate-300"
          }`}
          aria-label="Vertical fold"
        >
          ↔
        </button>
      </div>
    </div>
  )
}

export default Carousel 