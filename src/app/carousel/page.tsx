"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./_components/Carousel";
  
  export default function App() {
    return (
        <Carousel className="w-full h-64 bg-gray-100" interval={0} reverse={true} loop={true} >
        <CarouselContent>
          <CarouselItem className="bg-red-300">Slide 1lkjsdkl</CarouselItem>
          <CarouselItem className="bg-blue-300">Slide 2</CarouselItem>
          <CarouselItem className="bg-green-300">Slide 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious
          className="text-white bg-black p-2 rounded"
          onClick={() => console.log("Previous clicked!")}
        >
          {"<"}
        </CarouselPrevious>
        <CarouselNext
          className="text-white bg-black p-2 rounded"
          onClick={() => console.log("Next clicked!")}
        >
          {">"}
        </CarouselNext>
      </Carousel>
      
    );
  }
  