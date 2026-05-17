import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-12 py-3 
        border border-orange-600 
        text-white font-oswald uppercase tracking-widest
        transition-all duration-300 ease-out
        hover:bg-orange-600/20 hover:shadow-[0_0_15px_rgba(234,88,12,0.5)]
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;