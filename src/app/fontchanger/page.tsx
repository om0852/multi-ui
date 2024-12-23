import React from "react";
import FontChanger from "./_components/FontChanger_1";

const page = () => {
  return (
    <div>
      <FontChanger fontFamily="Muli" fontWeight={200}>
        Welcome to
      </FontChanger>
      <FontChanger fontFamily="Exo" fontWeight={200}>
        Welcome to
      </FontChanger>
      <FontChanger fontFamily="Abel" fontWeight={600}>
<p className="thin text-red-600">        Welcome to
</p>
      </FontChanger>
      {/* <p style={{fontFamily:"Raleway"}}>om salunke welcome</p> */}
    </div>
  );
};

export default page;
