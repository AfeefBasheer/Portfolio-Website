import React from 'react';

const Input = ({ type = 'text', placeholder, name, required, as = 'input' }) => {
  const commonProps = {
    placeholder,
    name,
    required,
    className: `w-full p-3 rounded-md bg-gray-800 border border-gray-700 
                text-secondary focus:outline-none focus:ring-2 
                focus:ring-accent transition-all`,
  };

  if (as === 'textarea') {
    return <textarea {...commonProps} rows="5" />;
  }

  return <input type={type} {...commonProps} />;
};

export default Input;