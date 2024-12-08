"use client";
import React, { useEffect, useState } from "react";
import SteppedProgressBar from "../steppedprogressbar/_components/SteppedProgressBar_3";

const page = () => {
    const [count,setCOunt]=useState(0);
    const handle = ()=>{
        setCOunt(prev=>prev+1);
    }
  return (
    <div onClick={handle}>
       <SteppedProgressBar
       
   activeStep={count}
    //  steps={["Start", "Middle", "Almost Done", "Finish"]}
     activeColor="bg-purple-600"
     completedColor="bg-teal-400"
     inactiveColor="bg-gray-300"
     animation={{ opacity: 1, transition: { duration: 0.4 } }}
  // animation={{ scale: 1.3, transition: { duration: 0.4 } }}
/>

    </div>
  );
};

export default page;
