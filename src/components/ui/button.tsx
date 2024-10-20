import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
// import { IconType } from '../core/icons/icon'; // Assuming IconType is the type for the icon prop
import { cn } from '@/lib/utils'; // Utility for combining class names

// Button variants using class-variance-authority
export const buttonVariants = cva(
  'leading-none text-white transition-all disabled:bg-slate-300',
  {
    variants: {
      variant: {
        primarybtn:
          'rounded-[10px] text-black bg-primary-color py-2.5 px-3 md:px-[32px] md:py-[18px] hover:bg-primary-color/50 hover:border-none transition-all',
          primaryoutlineBtn:
          'rounded-[10px] bg-none text-primary-color border border-primary-color py-2.5 px-3 md:px-[30px] md:px-[32px] md:py-[18px] hover:bg-primary-color/30 hover:border-white transition-all',
        secondarybtn:
          'rounded-[10px] text-black bg-secondary-color py-2.5 px-3 md:px-[32px] md:py-[18px] hover:bg-secondary-color/70 hover:border-none transition-all',
          secondaryoutlineBtn:
          'rounded-[10px] bg-none text-black border border-secondary-color py-2.5 px-3 md:px-[30px] md:px-[32px] md:py-[18px] hover:bg-secondary-color/30 hover:border-white transition-all',
        textBtn:
          'rounded-[10px] bg-none text-black py-2.5 px-3 md:px-[30px] md:px-[32px] md:py-[18px]',
        paginationBtn:
          'rounded-[10px] border bg-bg-yellow-500 px-3 py-2 text-white rounded-full',
        ghostBtn: 'rounded-full border border-bg-yellow-800 text-bg-yellow-800 bg-white px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'primarybtn', // Changed to 'primarybtn' instead of 'roundedBtn'
    },
  }
);

// Define the Button props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  label: string;
  // icon?: IconType; 
  icon?: any; 
  reverse?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  label,
  icon,
  reverse = false,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${cn(buttonVariants({ variant, className }))}`} {...props}>
      <div
        className={
          icon &&
          `text-[20px] flex justify-center items-center gap-2  ${reverse ? "flex-row-reverse gap-2" : "flex-row"
          }`
        }
      >
        <span className="whitespace-nowrap text-[20px]  px-3 md:px-[32px] ">{label}</span>
        {icon && <span><>{icon}</></span>}
      </div>
    </button>
  );
};

export default Button;
