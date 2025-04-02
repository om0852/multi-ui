'use client'

import { useState } from 'react'
import Button2 from '../tsx/Button_2'

export default function ButtonExample2() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Ripple Effect Button Examples</h2>
        <p className="text-gray-600 mb-4">
          Interactive buttons with ripple animation effects on click.
        </p>

        {/* Basic Examples */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Examples</h3>
          <div className="flex flex-wrap gap-4">
            <Button2 
              text="Click Me" 
              onClick={() => alert('Clicked!')} 
            />
            <Button2 
              text="Red Button" 
              color="bg-red-500"
              onClick={() => {}}
            />
            <Button2 
              text="Green Button" 
              color="bg-green-500"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Size Variants */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Size Variants</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button2 
              text="Small" 
              size="text-sm"
              onClick={() => {}}
            />
            <Button2 
              text="Medium" 
              size="text-base"
              onClick={() => {}}
            />
            <Button2 
              text="Large" 
              size="text-xl"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Custom Colors */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Custom Colors</h3>
          <div className="flex flex-wrap gap-4">
            <Button2 
              text="Purple" 
              color="bg-purple-500"
              onClick={() => {}}
            />
            <Button2 
              text="Yellow" 
              color="bg-yellow-500"
              textColor="text-gray-900"
              onClick={() => {}}
            />
            <Button2 
              text="Teal" 
              color="bg-teal-500"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Interactive Counter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Interactive Counter</h3>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-600">
                Clicks: <span className="font-semibold">{clickCount}</span>
              </p>
              <div className="flex gap-4">
                <Button2 
                  text="Increment" 
                  onClick={() => setClickCount(prev => prev + 1)}
                />
                <Button2 
                  text="Reset" 
                  color="bg-gray-500"
                  onClick={() => setClickCount(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 