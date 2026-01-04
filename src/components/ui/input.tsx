import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 rounded-none border-2 border-input bg-background px-2.5 py-1 text-xs transition-colors file:h-6 file:text-xs file:font-medium md:text-xs file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 aria-invalid:border-2 aria-invalid:border-destructive aria-invalid:bg-destructive/5",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
