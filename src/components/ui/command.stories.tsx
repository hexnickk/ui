import type { Meta, StoryObj } from '@storybook/react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from './command';

const meta: Meta<typeof Command> = {
  title: 'UI/Command',
  component: Command,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <Command className="border">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Create New Document</CommandItem>
          <CommandItem>Open Recent File</CommandItem>
          <CommandItem>Search Project</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>User Preferences</CommandItem>
          <CommandItem>Application Settings</CommandItem>
          <CommandItem>Keyboard Shortcuts</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
