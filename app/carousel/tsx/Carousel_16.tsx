"use client"

import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  rotationAxis?: "X" | "Y" | "Z"
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  rotationAxis = "Y",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
    setRotation((prev) => prev - 90)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
    setRotation((prev) => prev + 90)
  }

  const getFaceStyle = (index: number) => {
    const isActive = index === currentIndex
    const position = index - currentIndex

    let transform = ""
    if (rotationAxis === "Y") {
      transform = `rotateY(${position * 90}deg) translateZ(300px)`
    } else if (rotationAxis === "X") {
      transform = `rotateX(${position * 90}deg) translateZ(300px)`
    } else {
      transform = `rotateZ(${position * 90}deg) translateZ(300px)`
    }

    return {
      transform,
      opacity: isActive ? 1 : 0.8,
    }
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotate${rotationAxis}(${rotation}deg)`,
          transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              ...getFaceStyle(index),
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
              {child}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-10">
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
                const diff = index - currentIndex
                setCurrentIndex(index)
                setRotation((prev) => prev - diff * 90)
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

      {/* Rotation Axis Control */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 z-10">
        {["X", "Y", "Z"].map((axis) => (
          <button
            key={axis}
            onClick={() => {
              setRotation(0)
              rotationAxis = axis as "X" | "Y" | "Z"
            }}
            className={`text-white px-3 py-1 rounded-full transition-colors ${
              rotationAxis === axis
                ? "bg-white/20"
                : "hover:bg-white/10"
            }`}
            aria-label={`Rotate on ${axis} axis`}
          >
            {axis}
          </button>
        ))}
      </div>

      {/* Perspective Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 z-10">
        <button
          onClick={() => {
            const cube = document.querySelector(".cube") as HTMLElement
            if (cube) {
              const currentPerspective = parseInt(cube.style.perspective || "1000")
              cube.style.perspective = `${Math.max(500, currentPerspective - 100)}px`
            }
          }}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Decrease perspective"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Depth</span>
        <button
          onClick={() => {
            const cube = document.querySelector(".cube") as HTMLElement
            if (cube) {
              const currentPerspective = parseInt(cube.style.perspective || "1000")
              cube.style.perspective = `${Math.min(2000, currentPerspective + 100)}px`
            }
          }}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label="Increase perspective"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Carousel 