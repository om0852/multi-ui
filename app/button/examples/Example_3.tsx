'use client'

import { useState } from 'react'
import Button3 from '../tsx/Button_3'

export default function ButtonExample3() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <div className={`p-8 space-y-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Glow Effect Button Examples
          </h2>
          <Button3 
            text={`Switch to ${theme === 'light' ? 'Dark' : 'Light'}`}
            onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
          />
        </div>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
          Buttons with beautiful glow effects on hover.
        </p>

        {/* Basic Examples */}
        <div className="space-y-4">
          <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Basic Examples
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button3 
              text="Primary" 
              onClick={() => alert('Primary clicked!')} 
            />
            <Button3 
              text="Success" 
              onClick={() => alert('Success clicked!')}
            />
            <Button3 
              text="Warning" 
              onClick={() => alert('Warning clicked!')}
            />
          </div>
        </div>

        {/* Size Variants */}
        <div className="space-y-4">
          <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Size Variants
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button3 
              text="Small Button" 
              size="text-sm"
              onClick={() => {}}
            />
            <Button3 
              text="Default Size" 
              onClick={() => {}}
            />
            <Button3 
              text="Large Button" 
              size="text-xl"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Custom Colors */}
        <div className="space-y-4">
          <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Custom Colors
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button3 
              text="Purple Glow" 
              onClick={() => {}}
            />
            <Button3 
              text="Teal Glow" 
              onClick={() => {}}
            />
            <Button3 
              text="Pink Glow" 
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Call to Action
          </h3>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center gap-4">
              <p className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Experience the stunning glow effect by hovering over the buttons!
              </p>
              <Button3 
                text="Get Started Now" 
                size="text-lg"
                onClick={() => alert('Welcome aboard!')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 