"use client"

import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  portalSize?: number
  portalSpeed?: number
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  portalSize = 1,
  portalSpeed = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [portalAngle, setPortalAngle] = useState(0)

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextSlide()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, isHovered])

  useEffect(() => {
    if (isTransitioning) {
      const animationFrame = requestAnimationFrame(animatePortal)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isTransitioning, portalAngle])

  const animatePortal = () => {
    setPortalAngle((prev) => {
      const next = prev + 5 * portalSpeed
      if (next >= 360) {
        setIsTransitioning(false)
        return 0
      }
      return next
    })
  }

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
    }, 500)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
    }, 500)
  }

  const getPortalStyles = () => {
    const baseSize = 600 * portalSize
    const scale = isTransitioning ? 1 + Math.sin(portalAngle * Math.PI / 180) * 0.2 : 1
    return {
      clipPath: `circle(${baseSize * scale}px at 50% 50%)`,
      transform: `rotate(${portalAngle}deg) scale(${isTransitioning ? scale : 1})`,
    }
  }

  return (
    <div
      className="relative w-full h-[600px] mx-auto overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Portal Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0" style={{ background: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')" }} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-[400px] h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            {/* Portal Effect */}
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 transition-transform duration-500"
                style={getPortalStyles()}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  {children[currentIndex]}
                </div>

                {/* Portal Ring */}
                <div
                  className="absolute inset-0 border-8 border-white/30 rounded-full"
                  style={{
                    filter: "blur(4px)",
                    animation: isTransitioning ? "pulse 2s infinite" : "none",
                  }}
                />
              </div>

              {/* Energy Particles */}
              {isTransitioning && (
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{
                        x: "50%",
                        y: "50%",
                        scale: 0,
                        opacity: 1,
                      }}
                      animate={{
                        x: `${50 + Math.cos((i / 20) * Math.PI * 2) * 100}%`,
                        y: `${50 + Math.sin((i / 20) * Math.PI * 2) * 100}%`,
                        scale: [0, 1, 0],
                        opacity: [1, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}
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
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                }, 500)
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

      {/* Size Controls */}
      <div className="absolute top-8 right-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => portalSize > 0.5 && (portalSize -= 0.1)}
          className="text-white hover:text-violet-300 transition-colors"
          aria-label="Decrease size"
        >
          -
        </button>
        <span className="text-white/80 text-sm">Size</span>
        <button
          onClick={() => portalSize < 1.5 && (portalSize += 0.1)}
          className="text-white hover:text-violet-300 transition-colors"
          aria-label="Increase size"
        >
          +
        </button>
      </div>

      {/* Speed Controls */}
      <div className="absolute top-8 left-8 flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => portalSpeed > 0.5 && (portalSpeed -= 0.25)}
          className="text-white hover:text-violet-300 transition-colors"
          aria-label="Decrease speed"
        >
          ←
        </button>
        <span className="text-white/80 text-sm">Speed</span>
        <button
          onClick={() => portalSpeed < 2 && (portalSpeed += 0.25)}
          className="text-white hover:text-violet-300 transition-colors"
          aria-label="Increase speed"
        >
          →
        </button>
      </div>

      {/* Portal Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            ${isTransitioning ? "rgba(139,92,246,0.3)" : "transparent"} 0%, 
            transparent 70%
          )`,
          mixBlendMode: "screen",
        }}
      />
    </div>
  )
}

export default Carousel 