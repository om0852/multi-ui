'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b">
      <button
        className="flex w-full items-center justify-between py-4 px-6 hover:bg-gray-50"
        onClick={onClick}
      >
        <span className="text-left font-medium">{title}</span>
        <motion.img
          src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png"
          alt="Chevron Down"
          className="h-5 w-5"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 text-gray-700">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AccordionProps {
  items: Array<{ title: string; content: string }>
  allowMultiple?: boolean
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const handleClick = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(openIndexes.includes(index)
        ? openIndexes.filter(i => i !== index)
        : [...openIndexes, index]
      )
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index])
    }
  }

  return (
    <div className="divide-y rounded-lg border">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}
