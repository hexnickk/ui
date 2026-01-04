import * as React from "react";
import { Separator as SeparatorPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const separatorVariants = cva(
  "shrink-0 bg-none data-[orientation=horizontal]:w-full data-[orientation=vertical]:self-stretch data-[orientation=horizontal]:h-[1px] data-[orientation=vertical]:w-[1px] data-[orientation=horizontal]:border-t data-[orientation=vertical]:border-l border-dotted border-primary",
);

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants(), className)}
      {...props}
    />
  );
}

export { Separator, separatorVariants };
