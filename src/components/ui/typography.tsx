import * as React from "react";
import { cn } from "@/lib/utils";

function H1({ className, style, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="h1"
      style={{ fontSize: "2.25rem", lineHeight: "2.5rem", ...style }}
      className={cn("font-bold text-foreground", className)}
      {...props}
    />
  );
}

function H2({ className, style, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="h2"
      style={{ fontSize: "1.875rem", lineHeight: "2.25rem", ...style }}
      className={cn("font-bold text-foreground", className)}
      {...props}
    />
  );
}

function H3({ className, style, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="h3"
      style={{ fontSize: "1.5rem", lineHeight: "2rem", ...style }}
      className={cn("font-bold text-foreground", className)}
      {...props}
    />
  );
}

function H4({ className, style, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="h4"
      style={{ fontSize: "1.25rem", lineHeight: "1.75rem", ...style }}
      className={cn("font-bold text-foreground", className)}
      {...props}
    />
  );
}

function P({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="p"
      className={cn("text-base text-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

function Strong({ className, ...props }: React.ComponentProps<"strong">) {
  return (
    <strong
      data-slot="strong"
      className={cn("font-bold text-foreground", className)}
      {...props}
    />
  );
}

function Em({ className, ...props }: React.ComponentProps<"em">) {
  return (
    <em
      data-slot="em"
      className={cn("italic text-foreground", className)}
      {...props}
    />
  );
}

export { H1, H2, H3, H4, P, Strong, Em };
