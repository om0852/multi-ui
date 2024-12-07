"use client";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./_components/Carousel";

export default function App() {
  return (
    <Carousel className="w-full h-64 bg-gray-100" interval={0} loop={true}>
      {/* Carousel Slides */}
      <CarouselContent transitionEffect={0}>
        <CarouselItem className="bg-red-300">Slide 1</CarouselItem>
        <CarouselItem className="bg-blue-300">Slide 2</CarouselItem>
        <CarouselItem className="bg-green-300">Slide 3</CarouselItem>
        <CarouselItem className="bg-purple-300">Slide 4</CarouselItem>
        <CarouselItem className="bg-yellow-300">Slide 5</CarouselItem>
        <CarouselItem className="bg-orange-300">Slide 6</CarouselItem>
      </CarouselContent>

      {/* Navigation Buttons */}
      <CarouselPrevious className="text-white bg-black p-2 rounded">
        {"<"}
      </CarouselPrevious>
      <CarouselNext className="text-white bg-black p-2 rounded">
        {">"}
      </CarouselNext>

      {/* Carousel Dots */}
      <CarouselDots
        className="absolute bottom-4 w-full flex justify-center"
        dotClassName="w-4 h-4 rounded-full bg-gray-300 mx-2 bg-red-300"
        activeDotClassName="bg-blue-900"
      />
    </Carousel>
  );
}
