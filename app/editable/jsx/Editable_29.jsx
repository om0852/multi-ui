'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Editable_29 = ({
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
  const [lineItems, setLineItems] = useState(items)

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

  const formatCurrency = (amount) => {
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
        ) : null}
      </AnimatePresence>
    </motion.div>
  )
}
