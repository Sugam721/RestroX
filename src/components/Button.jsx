import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-10 py-4 rounded-full
        bg-black
        border border-white
        text-white
        transition-all duration-300
        hover:bg-white
        hover:border-white/40
        hover:text-red-500
        hover:scale-105
        active:scale-95
        shadow-xl

        font-body
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
