import React from "react";

const IconButton = ({ icon, text, className }) => {
  return (
    <button
      class={`flex mt-4 items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 ${className}`}
    >
      {icon && icon()}

      <span class="mx-1">{text}</span>
    </button>
  );
};

export default IconButton;
