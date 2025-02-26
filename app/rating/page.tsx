"use client";
import React from "react";
import Rating from "./_components/Rating_12";

const page = () => {
  return (
    <div>
      <Rating
        max={5}
        fillColor="yellow"
        borderColor="gray"
        onRatingChange={(newRating) => console.log(newRating)}
        initialRating={2.5}
      />
    </div>
  );
};

export default page;
