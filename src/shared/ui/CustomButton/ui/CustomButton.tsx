import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
}

const colorVariants = {
  primary: 'bg-primary hover:bg-primary-hover',
  secondary: 'bg-secondary hover:bg-secondary-hover',
  accent: 'bg-accent hover:bg-accent-hover',
  neutral: 'bg-neutral hover:bg-neutral-hover',
};

const CustomButton: FC<ButtonProps> = ({
  variant = 'accent',
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${colorVariants[variant]} rounded-md p-2 cursor-pointer border transition duration-250`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
