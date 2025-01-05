import React from 'react'
import  Carousel  from './_components/Carousel_5'

const ExampleCarousel = () => {
  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <Carousel autoPlay={true}  interval={4000}>
        <div className="w-full h-64 bg-red-500 flex items-center justify-center text-white font-bold text-xl">
          Slide 1
        </div>
        <div className="w-full h-64 bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
          Slide 2
        </div>
        <div className="w-full h-64 bg-green-500 flex items-center justify-center text-white font-bold text-xl">
          Slide 3
        </div>
        <div className="w-full h-64 bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">
          Slide 4
        </div>
      </Carousel>
    </div>
  )
}

export default ExampleCarousel
