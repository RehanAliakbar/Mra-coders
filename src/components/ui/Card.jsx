import React from 'react';

const Card = ({
  surface = 'ivory',
  className = '',
  children,
  ...props
}) => {
  const surfaces = {
    'ivory': 'bg-[var(--color-ivory-light)]',
    'feature': 'bg-[var(--color-manilla)]',
    'deep-warm': 'bg-[var(--color-oat-warm)]',
  };

  return (
    <div
      className={`rounded-[24px] ${surfaces[surface]} border border-[var(--color-stone)] border-opacity-50 p-[24px] sm:p-[32px] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
