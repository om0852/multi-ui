import React from "react";
import Typewriter_3 from "./_components/Typewriter_3";

const Page = () => {
  return (
    <div className="">
      {/* <Typewriter_1
        message="Follow the multi ui "
        cursorColor="green"
        duration={2}
        steps={10}
        className="text-4xl text-red-400 w-[auto]"
      /> */}
      {/* <Typewriter_2 message="om salunke welcome" duration={2} className="w-[10vh]"/> */}
      <Typewriter_3
        messages={[
          "Hi, I'm Si.",
          "I am Creative.",
          "I Love Design.",
          "I Love to Develop.",
        ]}
        period={20}
        className="text-4xl text-red-400 w-[auto]"
      />
    </div>
  );
};

export default Page;
