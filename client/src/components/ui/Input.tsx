import React from 'react';
import { cn } from '@/utils/cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} {...props} className={cn(`${className}`)}>
        Input
      </input>
    );
  },
);

export default Input;
