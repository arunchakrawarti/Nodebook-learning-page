import React from 'react';
const CustomButton = ({ 
  label = '(Start Now)', 
  onClick = () => console.log('Button Clicked!'),
  className = 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg'
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 
        font-semibold 
        text-sm 
        rounded-full 
        transition duration-300 ease-in-out 
        focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default CustomButton;