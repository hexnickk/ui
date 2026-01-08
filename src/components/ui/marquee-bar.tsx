import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeBarProps extends React.ComponentProps<"div"> {
  items: string[];
  speed?: "slow" | "default" | "fast";
  pauseOnHover?: boolean;
  separator?: React.ReactNode;
}

function MarqueeBar({
  items,
  speed = "default",
  pauseOnHover = false,
  separator = " • ",
  className,
  ...props
}: MarqueeBarProps) {
  const speedStyle = {
    slow: "var(--animate-marquee-slow)",
    default: "var(--animate-marquee)",
    fast: "var(--animate-marquee-fast)",
  }[speed];

  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div
      data-slot="marquee-bar"
      className={cn(
        "relative flex h-8 w-full overflow-hidden border-y-2 border-primary bg-primary text-primary-foreground",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center whitespace-nowrap",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ animation: speedStyle }}
      >
        {duplicatedItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="px-4 text-xs font-medium uppercase tracking-wide">
              {item}
            </span>
            {index < duplicatedItems.length - 1 && (
              <span className="text-xs opacity-50">{separator}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export { MarqueeBar };
