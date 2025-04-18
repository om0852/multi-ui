"use client"
import React from "react";
import BadgeExample1 from "./circularprogressbar/examples/Example_21";
import BadgeExample2 from "./circularprogressbar/examples/Example_22";
import BadgeExample3 from "./circularprogressbar/examples/Example_23";
import BadgeExample4 from "./circularprogressbar/examples/Example_24";
import BadgeExample5 from "./circularprogressbar/examples/Example_25";
import BadgeExample6 from "./circularprogressbar/examples/Example_16";
import BadgeExample7 from "./circularprogressbar/examples/Example_17";
import BadgeExample8 from "./circularprogressbar/examples/Example_18";
import BadgeExample9 from "./circularprogressbar/examples/Example_19"; 
import BadgeExample10 from "./circularprogressbar/examples/Example_20";
import Image from 'next/image'

const page = () => {
  return (
    <div className="text-2xl flex flex-col items-center justify-center">
      <div>Demo</div>
      <BadgeExample1/>
      <BadgeExample2/>
      <BadgeExample3/>
      <BadgeExample4/>
      <BadgeExample5/> 
      <BadgeExample6/>
      <BadgeExample7/>
      <BadgeExample8/>
      <BadgeExample9/>
      <BadgeExample10/>
      <div className="relative w-[800px] h-[500px] my-4">
        <Image 
          src="https://picsum.photos/seed/1101/800/500"
          alt="Random image"
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  );
};

export default page;
