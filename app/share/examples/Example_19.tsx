"use client";

import React from "react";
import ShareButton from "../tsx/Share_19";

const ShareExample19 = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <ShareButton title="Share this content" url="https://example.com/awesome-content" />
    </div>
  );
};

export default ShareExample19; 