"use client"

import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import React, { useState, useEffect } from "react"

interface CarouselProps {
  items: {
    id: number | string
    image: string
    title: string
    description?: string
    size?: "small" | "medium" | "large"
  }[]
  autoPlay?: boolean
  interval?: number
  columns?: number
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  columns = 4,
}) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null)
  const [layout, setLayout] = useState<"grid" | "focus">("grid")

  const itemsPerPage = columns * 2
  const totalPages = Math.ceil(items.length / itemsPerPage)

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        nextPage()
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentPage, autoPlay, interval, isHovered])

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage
    return items.slice(start, start + itemsPerPage)
  }

  const getItemSize = (size: "small" | "medium" | "large" = "medium") => {
    switch (size) {
      case "small":
        return "row-span-1 col-span-1"
      case "large":
        return "row-span-2 col-span-2"
      default:
        return "row-span-1 col-span-2"
    }
  }

  return (
    <div
      className="relative w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8 rounded-3xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LayoutGroup>
        <div
          className={`grid gap-4 transition-all duration-500 ${
            layout === "grid"
              ? `grid-cols-${columns} auto-rows-fr`
              : "grid-cols-1 auto-rows-fr"
          }`}
          style={{
            minHeight: "600px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {getCurrentItems().map((item) => (
              <motion.div
                key={item.id}
                layoutId={String(item.id)}
                className={`relative ${
                  layout === "grid" ? getItemSize(item.size) : "col-span-full"
                } rounded-xl overflow-hidden`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setHoveredItem(item.id)
                  setLayout(layout === "grid" ? "focus" : "grid")
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="relative w-full h-full group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-200 mt-2">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        <button
          onClick={prevPage}
          className="bg-white/10 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous Page"
        >
          ←
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextPage}
          className="bg-white/10 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next Page"
        >
          →
        </button>
      </div>

      {/* Layout Toggle */}
      <button
        onClick={() => {
          setLayout(layout === "grid" ? "focus" : "grid")
          setHoveredItem(null)
        }}
        className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/30 transition-colors"
        aria-label="Toggle layout"
      >
        {layout === "grid" ? "⊞" : "▣"}
      </button>
    </div>
  )
}

export default Carousel 