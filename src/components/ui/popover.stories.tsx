import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from './popover';
import { Button } from './button';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open Settings</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Account Settings</PopoverTitle>
          <PopoverDescription>
            Manage your account preferences and privacy settings.
          </PopoverDescription>
        </PopoverHeader>
        <div className="space-y-2">
          <div className="text-xs">
            <strong>Email:</strong> user@example.com
          </div>
          <div className="text-xs">
            <strong>Plan:</strong> Professional
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
