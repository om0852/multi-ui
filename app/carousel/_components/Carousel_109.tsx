"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Carousel109Props {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  flipSpeed?: number
}

const Carousel109 = ({
  children,
  autoPlay = false,
  interval = 3000,
  flipSpeed = 1,
}: Carousel109Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"left" | "right">("right")
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)

  const nextSlide = useCallback(() => {
    setFlipDirection("right")
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
  }, [children.length])

  const prevSlide = () => {
    setFlipDirection("left")
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setDragStart(e.clientX)
  }

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const dragDistance = e.clientX - dragStart
    const threshold = 100

    if (dragDistance > threshold) {
      prevSlide()
      setIsDragging(false)
    } else if (dragDistance < -threshold) {
      nextSlide()
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, nextSlide, isHovered])

  return (
    <div
      className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      style={{ perspective: "2000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Book Container */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: flipDirection === "right" ? "left center" : "right center",
            }}
            initial={{
              rotateY: flipDirection === "right" ? 0 : -180,
              x: flipDirection === "right" ? -50 : 50,
            }}
            animate={{
              rotateY: flipDirection === "right" ? 180 : 0,
              x: 0,
              transition: {
                duration: 1 / flipSpeed,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            exit={{
              rotateY: flipDirection === "right" ? 360 : -180,
              x: flipDirection === "right" ? 50 : -50,
              transition: {
                duration: 1 / flipSpeed,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
          >
            {/* Current Page */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[80%] h-[90%] bg-white rounded-lg shadow-2xl overflow-hidden">
                {children[currentIndex]}
                
                {/* Page Fold Effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.1), transparent 20%, transparent 80%, rgba(0,0,0,0.1))",
                    boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
                  }}
                />
              </div>
            </div>

            {/* Page Turn Shadow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
                transformOrigin: flipDirection === "right" ? "left center" : "right center",
                transform: `rotateY(${flipDirection === "right" ? -10 : 10}deg)`,
              }}
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 1 / flipSpeed,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between px-8 -translate-y-1/2 z-10">
        <motion.button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-2xl border border-white/20"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          ←
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-2xl border border-white/20"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          →
        </motion.button>
      </div>

      {/* Page Numbers */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center items-center gap-4 text-white/80">
        <span className="text-lg font-medium">
          {currentIndex + 1} / {children.length}
        </span>
      </div>

      {/* Ambient Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 60%)",
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}

export default Carousel109 