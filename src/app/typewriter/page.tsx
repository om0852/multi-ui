import React from "react";

import Typewriter_1 from "./_components/Typewriter_1";
import TypewriterComponent from "./_components/Typewriter_2";

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
      <TypewriterComponent message="om salunke welcome" duration={2} className="w-[10vh]"/>
    </div>
  );
};

export default Page;
