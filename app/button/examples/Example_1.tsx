'use client'

import { useState } from 'react'
import Button1 from '../tsx/Button_1'

export default function ButtonExample1() {
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(prev => prev + 1)
  }

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Animated Gradient Button Examples</h2>
        <p className="text-gray-600 mb-4">
          Beautiful gradient buttons with hover animations and interactive effects.
        </p>

        {/* Basic Examples */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Examples</h3>
          <div className="flex flex-wrap gap-4">
            <Button1 
              label="Click Me" 
              onClick={() => alert('Button clicked!')} 
            />
            <Button1 
              label="Hover Me" 
              onClick={() => {}} 
              className="from-pink-500 to-rose-500 hover:from-rose-500 hover:to-pink-500"
            />
            <Button1 
              label="Custom Colors" 
              onClick={() => {}} 
              className="from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500"
            />
          </div>
        </div>

        {/* Interactive Counter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Interactive Counter</h3>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-600">
                Click count: <span className="font-semibold">{clickCount}</span>
              </p>
              <div className="flex gap-4">
                <Button1 
                  label="Increment" 
                  onClick={handleClick}
                />
                <Button1 
                  label="Reset" 
                  onClick={() => setClickCount(0)}
                  className="from-gray-500 to-slate-500 hover:from-slate-500 hover:to-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styled Examples */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Custom Styled Examples</h3>
          <div className="flex flex-wrap gap-4">
            <Button1 
              label="Wide Button" 
              onClick={() => {}} 
              className="px-12"
            />
            <Button1 
              label="Purple Theme" 
              onClick={() => {}} 
              className="from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500"
            />
            <Button1 
              label="Orange Glow" 
              onClick={() => {}} 
              className="from-orange-500 to-amber-500 hover:from-amber-500 hover:to-orange-500 shadow-orange-200"
            />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Grid Layout</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Button1 
              label="Grid Item 1" 
              onClick={() => {}} 
              className="w-full"
            />
            <Button1 
              label="Grid Item 2" 
              onClick={() => {}} 
              className="w-full from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-500"
            />
            <Button1 
              label="Grid Item 3" 
              onClick={() => {}} 
              className="w-full from-violet-500 to-purple-500 hover:from-purple-500 hover:to-violet-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 