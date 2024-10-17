import React from "react";
import "./InputField.css"; // Styles for InputField component

// Define prop types for InputField
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string; // Optional, defaults to "text"
}

const InputField = ({ label, type = "text", ...props }: InputFieldProps) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} {...props} />
    </div>
  );
};

export default InputField;
