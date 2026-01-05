import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-none border-2 text-xs font-semibold uppercase inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:text-muted-foreground disabled:border-muted disabled:bg-transparent [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none [&_svg:not([class*='size-'])]:size-4 relative before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-current before:opacity-0 hover:before:w-1 hover:before:opacity-100 focus-visible:before:w-1 focus-visible:before:opacity-100 disabled:before:hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary before:bg-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground border-primary before:bg-primary",
        destructive: "bg-red-100 text-red-700 border-red-500 before:bg-red-500",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-5 gap-0.5 px-1.5 text-[10px] has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 [&_svg:not([class*='size-'])]:size-2.5",
        sm: "h-6 gap-1 px-2 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-11 gap-2 px-4 text-sm has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-5",
        icon: "size-8",
        "icon-xs": "size-5 [&_svg:not([class*='size-'])]:size-2.5",
        "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-lg": "size-11 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
