import React from 'react';

interface TextAreaProps {
  label?: string;
  name: string;
  content?: string;
  [key: string]: any;
}

const TextArea = ({ label, name, content, ...rest }: TextAreaProps) => {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className="block mb-1 text-sm text-gray-600">
          {label}
        </label>
      ) : null}
      <textarea
        name={name}
        id={name}
        rows={4}
        className="appearance-none pl-5 pr-14 w-full border border-gray-300 placeholder:text-gray-400 shadow-sm rounded-md focus:outline-none focus-ring1 focus:ring-purple-400 focus:border-purple-400"
        {...rest}
        value={content}
      />
    </div>
  );
};

export default TextArea;
