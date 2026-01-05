import * as React from "react"
import { Menubar as MenubarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn("bg-background h-8 gap-0.5 rounded-none border-2 border-primary p-1 flex items-center", className)}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "aria-expanded:bg-primary aria-expanded:text-primary-foreground rounded-none px-2 py-1 text-xs font-medium uppercase flex items-center outline-hidden select-none relative before:absolute before:inset-y-0 before:left-0 before:w-0 before:opacity-0 hover:before:w-1 hover:before:opacity-100 focus-visible:before:w-1 focus-visible:before:opacity-100 before:bg-primary aria-expanded:before:bg-primary-foreground",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn("bg-secondary text-popover-foreground min-w-36 rounded-none border-2 border-primary z-50 overflow-hidden", className )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "gap-2 rounded-none px-2 py-2 text-xs data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg:not([class*='size-'])]:size-4 group/menubar-item relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 before:absolute before:inset-y-0 before:left-0 before:w-0 before:opacity-0 hover:before:w-1 hover:before:opacity-100 focus-visible:before:w-1 focus-visible:before:opacity-100 focus:before:w-1 focus:before:opacity-100 data-[disabled]:before:hidden before:bg-primary data-[variant=destructive]:text-destructive data-[variant=destructive]:before:bg-destructive",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground gap-2 rounded-none py-2 pr-2 pl-7 text-xs data-disabled:opacity-50 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 before:absolute before:inset-y-0 before:left-0 before:w-0 before:opacity-0 hover:before:w-1 hover:before:opacity-100 focus-visible:before:w-1 focus-visible:before:opacity-100 focus:before:w-1 focus:before:opacity-100 data-disabled:before:hidden before:bg-primary data-[state=checked]:before:bg-primary-foreground",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="left-1.5 size-4 [&_svg:not([class*='size-'])]:size-4 pointer-events-none absolute flex items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon
          />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground gap-2 rounded-none py-2 pr-2 pl-7 text-xs data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 before:absolute before:inset-y-0 before:left-0 before:w-0 before:opacity-0 hover:before:w-1 hover:before:opacity-100 focus-visible:before:w-1 focus-visible:before:opacity-100 focus:before:w-1 focus:before:opacity-100 data-disabled:before:hidden before:bg-primary data-[state=checked]:before:bg-primary-foreground",
        className
      )}
      {...props}
    >
      <span className="left-1.5 size-4 [&_svg:not([class*='size-'])]:size-4 pointer-events-none absolute flex items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon
          />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn("px-2 py-2 text-xs data-[inset]:pl-8", className)}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("bg-border -mx-1 my-1 h-px border-t border-dotted border-black", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn("text-muted-foreground group-focus/menubar-item:text-accent-foreground text-xs tracking-widest ml-auto", className)}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "data-open:bg-primary data-open:text-primary-foreground gap-2 rounded-none px-2 py-2 text-xs data-[inset]:pl-8 [&_svg:not([class*='size-'])]:size-4 flex cursor-default items-center outline-none select-none relative before:absolute before:inset-y-0 before:left-0 before:w-0 before:opacity-0 hover:before:w-1 hover:before:opacity-100 focus-visible:before:w-1 focus-visible:before:opacity-100 focus:before:w-1 focus:before:opacity-100 before:bg-primary data-open:before:bg-primary-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn("bg-secondary text-popover-foreground min-w-32 rounded-none border-2 border-primary z-50 origin-(--radix-menubar-content-transform-origin) overflow-hidden", className )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
