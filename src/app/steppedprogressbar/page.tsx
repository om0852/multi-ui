"use client";
import React, { useEffect, useState } from "react";
import SteppedProgressBar, { Example } from "../steppedprogressbar/_components/SteppedProgressBar_10";

const page = () => {
  const [count, setCOunt] = useState(0);
  const handle = () => {
    setCOunt((prev) => prev + 1);
  };
  return (
    <div onClick={handle}>
<Example/>
    </div>
  );
};

export default page;
