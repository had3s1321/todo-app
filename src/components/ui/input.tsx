import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  searchBar?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, searchBar, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `bg-custom-light flex h-[60px] w-full rounded-[60px] border border-input ${searchBar ? "px-[48px]" : "px-[24px]"} placeholder:text-custom-grey file:text-sm md:text-sm py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
