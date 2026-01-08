import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "h-5 gap-1 rounded-none border-2 px-2 py-0.5 text-xs font-semibold uppercase tracking-tight has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary",
        secondary: "bg-secondary text-secondary-foreground border-primary",
        destructive: "bg-red-100 text-red-700 border-red-500",
        outline: "bg-transparent border-primary border-dotted text-foreground",
      },
      indicator: {
        default: "",
        dot: "before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-current before:mr-1.5",
        icon: "[&>svg]:size-3",
      },
    },
    defaultVariants: {
      variant: "default",
      indicator: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  indicator = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-indicator={indicator}
      className={cn(badgeVariants({ variant, indicator }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
