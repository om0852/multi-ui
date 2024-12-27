import React from "react";
import Timeline from "./_components/Timeline_5";

const page = () => {
  const customData = [
    {
      title: "Started Learning Programming",
      description: "Began with HTML, CSS, and JavaScript.",
      date: "January 2020",
      customStyles: "bg-red-50 py-4 rounded-lg",
    },
    {
      title: "Explored React",
      description: "Built first React application.",
      date: "June 2020",
    },
    {
      title: "Joined a Startup",
      description: "Worked as a frontend developer.",
      date: "March 2021",
    },
  ];

  return (
    <div>
      <Timeline
        data={customData}
        timelineStyle="bg-gray-50 shadow-lg rounded-md"
        itemAnimation={{
          initial: { opacity: 0, x: -50 },
          whileInView: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, type: "spring" },
          },
        }}
      />
    </div>
  );
};

export default page;
