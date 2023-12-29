import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva('some-class', {
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

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
      />
    );
  },
);

export { Button, buttonVariants };
