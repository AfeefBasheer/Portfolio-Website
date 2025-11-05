import React from "react";

const Tooltip = ({ text }) => {
  return (
    <span className="absolute top-full mt-2 px-1 py-0 rounded-md bg-gray-800 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
      {text}
    </span>
  );
};

export default Tooltip;
