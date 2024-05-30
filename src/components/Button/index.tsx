import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: IButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'rounded-lg border border-blue-800 bg-blue-100 px-6 py-1 text-blue-800 hover:bg-blue-200',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
