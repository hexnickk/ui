import * as React from "react";
import { cn } from "@/lib/utils";

function Ul({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="ul"
      className={cn("list-disc list-inside space-y-2 text-foreground", className)}
      {...props}
    />
  );
}

function Ol({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="ol"
      className={cn("list-decimal list-inside space-y-2 text-foreground", className)}
      {...props}
    />
  );
}

function Li({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="li"
      className={cn("text-base leading-relaxed", className)}
      {...props}
    />
  );
}

export { Ul, Ol, Li };
