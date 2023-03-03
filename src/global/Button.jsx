import React from "react";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-[8px] px-[26px] rounded-[100px] border-solid ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
