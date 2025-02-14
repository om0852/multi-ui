"use client"
import React from 'react'
import RangeSlider1 from './_components/RangeSlider_1'
import RangeSlider2 from './_components/RangeSlider_2'
import RangeSlider3 from './_components/RangeSlider_3'

const RangeSlidersDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Range Slider Examples</h1>
          <p className="mt-2 text-gray-600">Three different styles of range sliders</p>
        </div>

        {/* Gradient Style */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">Gradient Style</h2>
          <p className="text-sm text-gray-500 mb-4">A modern gradient slider with smooth animations</p>
          <RangeSlider1
            min={0}
            max={100}
            step={1}
            defaultValue={50}
            label="Volume"
            showValue={true}
            onChange={(value) => console.log('Slider 1:', value)}
          />
        </div>

        {/* Minimal Style */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">Minimal Style</h2>
          <p className="text-sm text-gray-500 mb-4">A clean, minimal black and white design</p>
          <RangeSlider2
            min={0}
            max={200}
            step={5}
            defaultValue={100}
            label="Price Range"
            showValue={true}
            onChange={(value) => console.log('Slider 2:', value)}
          />
        </div>

        {/* Playful Style */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">Playful Style</h2>
          <p className="text-sm text-gray-500 mb-4">A fun, interactive design with patterns and effects</p>
          <RangeSlider3
            min={0}
            max={50}
            step={0.5}
            defaultValue={25}
            label="Rating"
            showValue={true}
            onChange={(value) => console.log('Slider 3:', value)}
          />
        </div>
      </div>
    </div>
  )
}

export default RangeSlidersDemo
