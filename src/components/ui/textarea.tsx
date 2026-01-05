import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "rounded-none border-2 border-primary bg-secondary px-2.5 py-2 text-xs md:text-xs placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:text-muted-foreground disabled:border-muted aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
