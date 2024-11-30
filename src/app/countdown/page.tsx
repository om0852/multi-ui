



"use client"
import React from "react";
import Countdown from "./_components/Countdown_20";

const page = () => {
  return (
    <div>
      <Countdown
        to={new Date("2024-11-30T23:59:59")} // Set the end time here
        interval={1} // Update every second
        onComplete={()=>console.log("welcome")}
      />
    </div>
  );
};

export default page;
