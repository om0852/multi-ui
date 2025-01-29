"use client"

import Carousel104 from "./_components/Carousel_104"

const slides = [
  {
    id: 1,
    title: "Mountain Landscape",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    description: "Majestic mountain peaks reaching into the clouds",
  },
  {
    id: 2,
    title: "Ocean Sunset",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Beautiful sunset over the calm ocean waves",
  },
  {
    id: 3,
    title: "Forest Path",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    description: "Serene path through a lush green forest",
  },
  {
    id: 4,
    title: "Desert Dunes",
    image: "https://images.unsplash.com/photo-1682686580003-82234f1d324f",
    description: "Rolling sand dunes in the vast desert",
  },
]

export default function CarouselPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          3D Carousel Showcase
        </h1>
        
        <div className="mb-12">
          <Carousel104 autoPlay interval={5000}>
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative w-full h-full group"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-lg text-white/80">{slide.description}</p>
                </div>
              </div>
            ))}
          </Carousel104>
        </div>

        <div className="text-white text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Features of the 3D Carousel
          </h2>
          <ul className="text-left space-y-2 text-gray-300">
            <li>• Smooth 3D cube rotation transitions</li>
            <li>• Interactive hover effects with content reveal</li>
            <li>• Animated pagination indicators</li>
            <li>• Autoplay with hover pause</li>
            <li>• Responsive design with mobile support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
