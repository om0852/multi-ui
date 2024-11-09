import React from "react";
import Typewriter_5 from "./_components/Typewriter_5";
import Typewriter_3 from "./_components/Typewriter_3";
import Typewriter_4 from "./_components/Typewriter_4";
import Typewriter_2 from "./_components/Typewriter_2";
import Typewriter_1 from "./_components/Typewriter_1";
// import Typewriter_3 from "./_components/Typewriter_3";
// import Typewriter_4 from "./_components/Typewriter_4";

const Page = () => {
  return (
    <div className="">
      <Typewriter_1
        message="Follow the multi ui "
        cursorColor="green"
        duration={2}
        steps={10}
        className="text-4xl text-red-400 w-[auto]"
      />
      <Typewriter_2 message="om salunke welcome" duration={2} className="w-[10vh]"/>
      <Typewriter_3
        messages={[
          "Hi, I'm Si.",
          "I am Creative.",
          "I Love Design.",
          "I Love to Develop.",
        ]}
        typingSpeed={20}
        className="text-4xl text-red-400 w-[20vh]"
      />
      <Typewriter_4 messages={["om salunke \n welcome","welcome to this ","testing"]} typingSpeed={20} cursorWidth={20}/>
      
      <Typewriter_5
        text="Web Developer"
        fontSize="2rem"
        cursorColor="red"
        cursorWidth="0.2em"
        reverse={false}
        loop={true}
        speed={2} // slower typing speed
      />

    </div>
  );
};

export default Page;
