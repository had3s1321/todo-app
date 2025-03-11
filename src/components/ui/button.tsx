import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        dropdown: "bg-[var(--custom-light)]",
        round: "bg-[var(--custom-secondary)]",
        action: "bg-[var(--custom-primary)]",
        submit:
          "mx-auto flex gap-2 rounded-[30px] bg-[var(--custom-primary)] p-4 text-[18px] text-white",
        date: "bg-[var(--custom-light)]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        dropdown: "w-full p-3",
        smCustom: "h-[32px] w-[32px] [&_svg]:size-[18px]",
        noCustom: "h-[36px] w-[36px] [&_svg]:size-[24px]",
        lgCustom: "h-[44px] w-[44px] [&_svg]:size-[24px]",
        xlCustom: "h-[56px] w-[192px] [&_svg]:size-[24px]",
        xlCustomFull: "h-[60px] w-full [&_svg]:size-[24px]",
      },
    },
    defaultVariants: {
      variant: "round",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
