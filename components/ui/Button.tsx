import React from "react";
import "./Global.css"; // Styles for Button component
import { FaDev } from "react-icons/fa"; // Adjust with your icon choice

// Define the type for ButtonProps
interface ButtonProps {
  type?: "primary" | "critical";
  icon?: React.ReactNode; // icon can be a React node
  label: string;
  onClick: () => void; // a function with no arguments and no return value
}

const Button = ({ type = "primary", icon, label, onClick }: ButtonProps) => {
  return (
    <button
      className={`button ${type === "critical" ? "red" : "teal"}`}
      onClick={onClick}
    >
      {icon && <FaDev className="button-icon" />}
      {label}
    </button>
  );
};

export default Button;
