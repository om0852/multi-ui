import React from "react";
import Bar_29 from "../tsx/Bar_29";

const Example_29 = () => {
  interface CirclePackingNode {
    id: string;
    label: string;
    value: number;
    color?: string;
    children?: CirclePackingNode[];
  }
  const exampleData: CirclePackingNode = {
    id: "root",
    label: "Root",
    value: 1000,
  };
  return (
    <div>
      <Bar_29 data={exampleData} />
    </div>
  );
};

export default Example_29;
