'use client'

import React from 'react'
import Bar_21 from "../tsx/Bar_21"

export default function Example_21() {
  const sampleData = [10, 20, 30, 40, 50, 25, 35, 45, 55, 60, 20, 25, 30, 40]

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Bar_21 data={sampleData} width={500} height={300} barColor="#4F46E5" hoverColor="#6366F1" />
    </div>
  )
}
