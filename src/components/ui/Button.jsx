import React from 'react';

const Button = ({
  variant = 'filled-ivory',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-chrome transition-colors';

  const variants = {
    'text-link': 'bg-transparent text-[var(--color-slate-dark)] rounded-none px-[12px] py-[22px] hover:underline hover:underline-offset-4',
    'filled-ivory': 'bg-[var(--color-ivory-light)] text-[var(--color-slate-dark)] rounded-b-[8px] rounded-t-none px-[31px] py-[12px]',
    'outlined-dark': 'bg-transparent text-white border border-[var(--color-cloud-dark)] rounded-[12px] px-[16px] py-[8px]',
    'clay-filled': 'bg-[var(--color-clay)] hover:bg-[var(--color-clay-deep)] text-white rounded-b-[8px] rounded-t-none px-[31px] py-[12px]',
    'outlined-clay': 'bg-transparent text-[var(--color-clay)] border border-[var(--color-clay)] hover:bg-[var(--color-clay)] hover:text-white rounded-b-[8px] rounded-t-none px-[31px] py-[12px]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
