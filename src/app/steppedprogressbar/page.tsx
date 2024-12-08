"use client";
import React, { useEffect, useState } from "react";
import SteppedProgressBar from "../steppedprogressbar/_components/SteppedProgressBar_5";

const page = () => {
    const [count,setCOunt]=useState(0);
    const handle = ()=>{
        setCOunt(prev=>prev+1);
    }
  return (
    <div onClick={handle}>
       <SteppedProgressBar
       
   activeStep={count}
   steps={[
        { label: "Start", onClick: () => console.log("Clicked Step 1") },
        { label: "Middle", onClick: () => console.log("Clicked Step 2") },
        { label: "Almost Done", onClick: () => console.log("Clicked Step 3") },
        { label: "Finish", onClick: () => console.log("Clicked Step 4") },
      ]}
      activeColor="bg-red-600"
      completedColor="bg-yellow-400"
      inactiveColor="bg-gray-300"
      animation={{ rotate: 360, scale: 1.1, transition: { duration: 0.6 } }}
    //  // animation={{ scale: 1.3, transition: { duration: 0.4 } }}
/>

    </div>
  );
};

export default page;
