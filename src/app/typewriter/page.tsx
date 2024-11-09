import React from "react";

import Typewriter_1 from "./_components/Typewriter_1";

const Page = () => {
  return (
    <div className="h-[5vh]">
      <Typewriter_1
        message="Follow the multi ui "
        cursorColor="green"
        duration={2}
        steps={10}
        className="text-4xl text-red-400 w-[auto]"
      />
    </div>
  );
};

export default Page;
