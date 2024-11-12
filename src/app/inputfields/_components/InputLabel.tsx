import React, { LabelHTMLAttributes } from "react";

// Use LabelHTMLAttributes for label element
const InputLabel: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = (props) => {
  return <label {...props}>{props.children}</label>;
};

export default InputLabel;
