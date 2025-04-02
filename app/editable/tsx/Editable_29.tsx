'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LineItem {
  id: number
  description: string
  quantity: number
  price: number
}

interface Editable_29Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  currency?: string
  items?: LineItem[]
  tax?: number
}

export const Editable_29: React.FC<Editable_29Props> = ({
  initialContent,
  onSave,
  className = '',
  currency = '$',
  items = [
    { id: 1, description: 'Item 1', quantity: 1, price: 100 },
    { id: 2, description: 'Item 2', quantity: 2, price: 50 },
  ],
  tax = 10,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [lineItems, setLineItems] = useState<LineItem[]>(items)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const calculateSubtotal = () => {
    return lineItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)
  }

  const calculateTax = () => {
    return calculateSubtotal() * (tax / 100)
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax()
  }

  const formatCurrency = (amount: number) => {
    return `${currency}${amount.toFixed(2)}`
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Quote header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quote</h3>
            <p className="text-sm text-gray-500 mt-1">#{Math.floor(Math.random() * 10000)}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Date</div>
            <div className="font-medium">{new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6"
          >
            <div className="space-y-4">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                placeholder="Add quote description or notes..."
              />
              <div className="space-y-2">
                {lineItems.map((item, index) => (
                  <div key={item.id} className="flex space-x-2">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => {
                        const newItems = [...lineItems]
                        newItems[index].description = e.target.value
                        setLineItems(newItems)
                      }}
                      className="flex-grow p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Item description"
                    />
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const newItems = [...lineItems]
                        newItems[index].quantity = Number(e.target.value)
                        setLineItems(newItems)
                      }}
                      className="w-24 p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Qty"
                    />
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) => {
                        const newItems = [...lineItems]
                        newItems[index].price = Number(e.target.value)
                        setLineItems(newItems)
                      }}
                      className="w-32 p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Price"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setLineItems([...lineItems, { id: lineItems.length + 1, description: '', quantity: 1, price: 0 }])
                }}
                className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700"
              >
                + Add Line Item
              </motion.button>
              <div className="space-x-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save Quote
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditing(true)}
            className="p-6 cursor-pointer group"
          >
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-700">
                  {content || 'Click to add quote description or notes...'}
                </p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="pb-2">Description</th>
                    <th className="pb-2 text-right">Qty</th>
                    <th className="pb-2 text-right">Price</th>
                    <th className="pb-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {lineItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2">{item.description}</td>
                      <td className="py-2 text-right">{item.quantity}</td>
                      <td className="py-2 text-right">{formatCurrency(item.price)}</td>
                      <td className="py-2 text-right">{formatCurrency(item.quantity * item.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-2 bg-blue-50 rounded-full">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote footer */}
      <div className="bg-gray-50 p-6 border-t border-gray-200 rounded-b-xl">
        <div className="flex justify-end">
          <div className="w-64 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">{formatCurrency(calculateSubtotal())}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax ({tax}%)</span>
              <span className="font-medium">{formatCurrency(calculateTax())}</span>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-bold text-blue-600">{formatCurrency(calculateTotal())}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 