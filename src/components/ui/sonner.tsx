"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <span className="text-xs font-mono">[✓]</span>
        ),
        info: (
          <span className="text-xs font-mono">[i]</span>
        ),
        warning: (
          <span className="text-xs font-mono">[!]</span>
        ),
        error: (
          <span className="text-xs font-mono">[×]</span>
        ),
        loading: (
          <span className="text-xs font-mono">[...]</span>
        ),
      }}
      style={
        {
          "--normal-bg": "#171717",
          "--normal-text": "#ffffff",
          "--normal-border": "#171717",
          "--success-border": "#86EFAC",
          "--error-border": "#DC2626",
          "--warning-border": "#F59E0B",
          "--info-border": "#171717",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast ![animation-duration:0s] ![transition-duration:0s] border",
          title: "uppercase text-white",
          description: "text-white/90",
          success: "border-[--success-border]",
          error: "border-[--error-border]",
          warning: "border-[--warning-border]",
          info: "border-[--info-border]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
