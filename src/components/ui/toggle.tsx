"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "aria-invalid:border-destructive data-[state=on]:bg-primary data-[state=on]:text-primary-foreground gap-1 rounded-none text-xs font-medium uppercase [&_svg:not([class*='size-'])]:size-4 group/toggle inline-flex items-center justify-center whitespace-nowrap outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 relative before:absolute before:inset-y-0 before:left-0 before:w-0 before:opacity-0 hover:before:w-1 hover:before:opacity-100 focus-visible:before:w-1 focus-visible:before:opacity-100 disabled:before:hidden before:bg-primary data-[state=on]:before:bg-primary-foreground",
  {
    variants: {
      variant: {
        default: "bg-white border-2 border-primary",
        outline: "border-primary border-2 bg-white",
      },
      size: {
        default: "h-8 min-w-8 px-2",
        sm: "h-7 min-w-7 rounded-none px-1.5",
        lg: "h-9 min-w-9 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
