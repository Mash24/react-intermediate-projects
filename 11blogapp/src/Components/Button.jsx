import React from 'react';

function Button({
    children, // Correct, lowercase
    type = "button",
    bgColor = "bg-blue-500", // Tailwind requires "bg-" prefix
    textColor = "text-white", // Tailwind requires "text-" prefix
    className = "",
    ...props
}) {
    return (
        <button 
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} 
            {...props}
            type={type}
        >
            {children}  {/* Correct usage */}
        </button>
    );
}

export default Button;
