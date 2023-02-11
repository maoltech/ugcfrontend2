import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-[8px] px-[26px] rounded-[100px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
