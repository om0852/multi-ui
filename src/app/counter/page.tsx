"use client"
import React from "react";
import DigitalClock from './_components/Counter_20'
// import AnimatedCounter from "./_components/Counter_2";
// import BouncyCounter from "./_components/Counter_3";
// import FlipCounter from "./_components/Counter_4";
// import FlipPageCounter from "./_components/Counter_5";
// import SlideCounter from "./_components/Counter_6";
// import UniqueSlideCounter from "./_components/Counter_10";

const Page = () => {
  return (
    <div>
      <DigitalClock
      from={0} to={100}
      interval={1000}
      duration={100}
  />
      {/* <AnimatedCounter
  from={0}
  to={1500}
  duration={3}
  easing="easeOut"
  className="text-4xl font-bold text-green-500"
/> */}
      {/* <BouncyCounter
        from={0}
        to={100}
        onEnd={()=>alert("end")}
        duration={3}
        // easing={easeOutBounce}
      /> */}
{/* <UniqueSlideCounter
        from={0}
        to={30}
        duration={100}
        interval={0.1}
        className="my-custom-counter"
      />
      */}
          </div>
  );
};

export default Page;
