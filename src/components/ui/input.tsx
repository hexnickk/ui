import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "rounded-none border-2 border-primary bg-secondary text-xs file:font-medium file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:text-muted-foreground disabled:border-muted aria-invalid:border-destructive relative",
  {
    variants: {
      size: {
        default: "h-8 px-2.5 py-1 file:h-6 file:text-xs",
        sm: "h-6 px-2 py-0.5 text-[10px] file:h-5 file:text-[10px]",
        lg: "h-11 px-4 py-2 text-sm file:h-8 file:text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

function Input({
  className,
  type,
  size = "default",
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={size}
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  );
}

export { Input, inputVariants };
