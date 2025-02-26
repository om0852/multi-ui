'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  tags: string[]
  caption?: string
  photographer?: {
    name: string
    avatar: string
  }
}

interface Editable_44Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  images?: GalleryImage[]
  columns?: number
  spacing?: number
}

export const Editable_44: React.FC<Editable_44Props> = ({
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
    {
      id: '3',
      src: 'https://picsum.photos/800/800?random=3',
      alt: 'Urban architecture',
      width: 800,
      height: 800,
      tags: ['architecture', 'urban'],
      caption: 'Modern city architecture',
      photographer: {
        name: 'Bob Wilson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
      },
    },
    {
      id: '4',
      src: 'https://picsum.photos/900/600?random=4',
      alt: 'Wildlife photography',
      width: 900,
      height: 600,
      tags: ['wildlife', 'nature'],
      photographer: {
        name: 'Emma Davis',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      },
    },
    {
      id: '5',
      src: 'https://picsum.photos/600/900?random=5',
      alt: 'Street photography',
      width: 600,
      height: 900,
      tags: ['street', 'urban'],
      caption: 'Life in the city',
      photographer: {
        name: 'Mike Johnson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      },
    },
    {
      id: '6',
      src: 'https://picsum.photos/800/500?random=6',
      alt: 'Abstract art',
      width: 800,
      height: 500,
      tags: ['abstract', 'art'],
      photographer: {
        name: 'Sarah Brown',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      },
    },
  ],
  columns = 3,
  spacing = 16,
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedTag] = useState<string | null>(null)
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setSelectedImage(null)
  }

  const handleTagClick = (tag: string) => {
    // Implementation of handleTagClick function
  }

  const allTags = Array.from(
    new Set(images.flatMap(image => image.tags))
  ).sort()

  const filteredImages = selectedTag
    ? images.filter(image => image.tags.includes(selectedTag))
    : images

  const getColumnImages = (columnIndex: number) => {
    return filteredImages.filter((_, index) => index % columns === columnIndex)
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gallery header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-900">Gallery</h2>
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>

      {/* Gallery grid */}
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
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg" />
                <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {image.photographer && (
                        <>
                          <img
                            src={image.photographer.avatar}
                            alt={image.photographer.name}
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                          <span className="text-sm font-medium">
                            {image.photographer.name}
                          </span>
                        </>
                      )}
                    </div>
                    <button className="p-2 hover:bg-black hover:bg-opacity-20 rounded-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                  {image.caption && (
                    <p className="text-sm">{image.caption}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-center justify-between text-white">
                  <div>
                    {selectedImage.photographer && (
                      <div className="flex items-center space-x-2 mb-2">
                        <img
                          src={selectedImage.photographer.avatar}
                          alt={selectedImage.photographer.name}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                        <span className="text-sm font-medium">
                          {selectedImage.photographer.name}
                        </span>
                      </div>
                    )}
                    {selectedImage.caption && (
                      <p className="text-sm">{selectedImage.caption}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 