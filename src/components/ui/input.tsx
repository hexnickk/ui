import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 rounded-none border-2 border-primary bg-secondary px-2.5 py-1 text-xs file:h-6 file:text-xs file:font-medium md:text-xs file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:text-muted-foreground disabled:border-muted aria-invalid:border-destructive relative",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
