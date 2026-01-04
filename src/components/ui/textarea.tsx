import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "rounded-none border-2 border-input bg-background px-2.5 py-2 text-xs transition-colors md:text-xs placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 aria-invalid:border-2 aria-invalid:border-destructive aria-invalid:bg-destructive/5",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
