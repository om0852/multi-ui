"use client"

import Carousel111 from "./_components/Carousel_111"
import Carousel112 from "./_components/Carousel_112"
import Carousel113 from "./_components/Carousel_117"
import Carousel114 from "./_components/Carousel_118"
import Carousel115 from "./_components/Carousel_115"
import Carousel116 from "./_components/Carousel_116"
import Carousel110 from "./_components/Carousel_110"
import Carousel109 from "./_components/Carousel_109"
import Carousel108 from "./_components/Carousel_108"
import Carousel107 from "./_components/Carousel_107"
import Carousel106 from "./_components/Carousel_106"
import Carousel105 from "./_components/Carousel_105"
import Carousel104 from "./_components/Carousel_104"
import Carousel103 from "./_components/Carousel_103"
import Carousel102 from "./_components/Carousel_102"

const slides = [
  {
    title: "Mountain Vista",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    description: "Majestic mountain peaks reaching into the clouds.",
  },
  {
    title: "Ocean Sunset",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    description: "Vibrant sunset colors reflecting off the ocean waves.",
  },
  {
    title: "Forest Path",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    description: "A serene path winding through a lush green forest.",
  },
]

const CarouselPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Modern Carousel Collection
        </h1>

        {/* Parallax Depth Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Parallax Depth Effect
          </h2>
          <Carousel111 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel111>
        </section>

        {/* Morphing Shape Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Morphing Shapes
          </h2>
          <Carousel112 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel112>
        </section>

        {/* Liquid Flow Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Liquid Flow Effect
          </h2>
          <Carousel113 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel113>
        </section>

        {/* 3D Perspective Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            3D Perspective
          </h2>
          <Carousel114 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel114>
        </section>

        {/* Glitch Effect Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Glitch Effect
          </h2>
          <Carousel115 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel115>
        </section>

        {/* Neon Glow Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Neon Glow Effect
          </h2>
          <Carousel116 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel116>
        </section>

        {/* Kaleidoscope Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Kaleidoscope Effect
          </h2>
          <Carousel110 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel110>
        </section>

        {/* Holographic Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Holographic Effect
          </h2>
          <Carousel109 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel109>
        </section>

        {/* Crystal Refraction Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Crystal Refraction
          </h2>
          <Carousel108 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel108>
        </section>

        {/* Smoke Trail Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Smoke Trail Effect
          </h2>
          <Carousel107 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel107>
        </section>

        {/* Ripple Wave Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Ripple Wave Effect
          </h2>
          <Carousel106 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel106>
        </section>

        {/* Aurora Borealis Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Aurora Borealis Effect
          </h2>
          <Carousel105 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel105>
        </section>

        {/* Prism Split Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Prism Split Effect
          </h2>
          <Carousel104 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel104>
        </section>

        {/* Quantum Blur Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Quantum Blur Effect
          </h2>
          <Carousel103 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel103>
        </section>

        {/* Matrix Rain Carousel */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Matrix Rain Effect
          </h2>
          <Carousel102 autoPlay interval={5000}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel102>
        </section>
      </div>
    </div>
  )
}

export default CarouselPage
