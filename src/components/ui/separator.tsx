import * as React from "react";
import { Separator as SeparatorPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const separatorVariants = cva(
  "shrink-0 bg-border data-[orientation=horizontal]:w-full data-[orientation=vertical]:self-stretch",
  {
    variants: {
      variant: {
        default: "data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px]",
        dashed: "data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px] data-[orientation=horizontal]:bg-none data-[orientation=vertical]:bg-none data-[orientation=horizontal]:border-t-2 data-[orientation=vertical]:border-l-2 border-dashed border-border",
        dotted: "data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px] data-[orientation=horizontal]:bg-none data-[orientation=vertical]:bg-none data-[orientation=horizontal]:border-t-2 data-[orientation=vertical]:border-l-2 border-dotted border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  variant = "default",
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof separatorVariants>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Separator, separatorVariants };
