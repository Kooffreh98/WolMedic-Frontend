import React from "react";
import "./Icon.css"; // Styles for Icon component

interface IconProps {
  name: string;
  size: number | string; // Define size as a number or a string, depending on your use case
}

const Icon = ({ name, size }: IconProps) => {
  return <span className={`icon-${name} icon-size-${size}`}></span>;
};

export default Icon;
