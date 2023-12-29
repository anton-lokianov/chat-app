import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const inputVariants = cva('some-class', {
  variants: {
    variant: {
      default: 'bg-gray-500',
      primary: 'bg-blue-500',
      secondary: 'bg-gray-500',
    },
    size: {
      default: 'text-sm',
      medium: 'text-md',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cn(inputVariants({ className, variant, size }))}
      >
        Input
      </input>
    );
  },
);

export default Input;
