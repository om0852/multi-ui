'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export const Editable_44 = ({
  initialContent,
  onSave,
  className = '',
  images = [
    {
      id: '1',
      src: 'https://picsum.photos/800/600?random=1',
      alt: 'Mountain landscape',
      width: 800,
      height: 600,
      tags: ['nature', 'landscape'],
      caption: 'Beautiful mountain landscape at sunset',
      photographer: {
        name: 'John Doe',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      },
    },
    {
      id: '2',
      src: 'https://picsum.photos/600/800?random=2',
      alt: 'Portrait photography',
      width: 600,
      height: 800,
      tags: ['portrait', 'people'],
      caption: 'Portrait of a young artist',
      photographer: {
        name: 'Alice Smith',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
      },
    },
  ],
  columns = 3,
  spacing = 16,
}) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setSelectedImage(null)
  }

  const filteredImages = images;

  const getColumnImages = (columnIndex) => {
    return filteredImages.filter((_, index) => index % columns === columnIndex)
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-900">Gallery</h2>
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>

      <div className={`grid grid-cols-${columns} gap-${spacing} p-4`}>
        {Array.from({ length: columns }, (_, i) => (
          <div key={i} className="space-y-4">
            {getColumnImages(i).map(image => (
              <motion.div
                key={image.id}
                layoutId={image.id}
                className="relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto rounded-lg cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
