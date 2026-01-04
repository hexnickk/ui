import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva("grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 rounded-none border px-2.5 py-2 text-left text-xs has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 w-full relative group/alert", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground border-l-4 border-l-gray-500 border-y border-r border-primary",
      success: "bg-card text-card-foreground border-l-4 border-l-green-500 border-y border-r border-primary",
      warning: "bg-card text-card-foreground border-l-4 border-l-amber-500 border-y border-r border-primary",
      destructive: "bg-card text-card-foreground border-l-4 border-l-red-500 border-y border-r border-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const iconMap = {
  default: "[i]",
  success: "[✓]",
  warning: "[!]",
  destructive: "[×]",
}

const iconColorMap = {
  default: "",
  success: "text-green-600",
  warning: "text-amber-600",
  destructive: "text-red-600",
}

function Alert({
  className,
  variant = "default",
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <span className={cn("text-xs font-mono row-span-2", iconColorMap[variant])}>
        {iconMap[variant]}
      </span>
      {children}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-semibold uppercase col-start-2 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3",
        "group-data-[variant=success]/alert:text-green-600 group-data-[variant=warning]/alert:text-amber-600 group-data-[variant=destructive]/alert:text-red-600",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground text-xs/relaxed text-balance md:text-pretty [&_p:not(:last-child)]:mb-2 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 col-start-2",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-[calc(--spacing(1.25))] right-[calc(--spacing(1.25))]", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
