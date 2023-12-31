import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `w-full rounded-full bg-purple-600 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-neutral-200 font-bold hover:opacity-80 transition tracking-widest`, className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >{ children}</button>
    );
  }
);

Button.displayName = "Button";

export default Button;
