"use client"
import React from "react";
import BadgeExample1 from "./drawer/examples/Example_1";
import BadgeExample2 from "./drawer/examples/Example_2";
import BadgeExample3 from "./drawer/examples/Example_3";
import BadgeExample4 from "./drawer/examples/Example_4";
import BadgeExample5 from "./drawer/examples/Example_5";
import BadgeExample6 from "./drawer/examples/Example_6";
import BadgeExample7 from "./drawer/examples/Example_7";
import BadgeExample8 from "./drawer/examples/Example_8";
import BadgeExample9 from "./drawer/examples/Example_9"; 
import BadgeExample10 from "./drawer/examples/Example_10";
import Image from 'next/image'

const page = () => {
  return (
    <div className="text-2xl w-[30vh] overflow-hidden flex flex-col items-center justify-center">
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
