import React from 'react';

const Badge = ({ children, className = '', ...props }) => {
  return (
    <span
      className={`font-chrome font-bold text-[var(--color-slate-dark)] bg-transparent rounded-none p-0 inline-block ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
