import type { Meta, StoryObj } from '@storybook/react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetBody, SheetTitle, SheetDescription } from './sheet';
import { Button } from './button';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Panel</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notification Settings</SheetTitle>
          <SheetDescription>
            Configure how you receive notifications
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <div className="space-y-4">
            <div className="text-sm">
              <strong>Email Notifications:</strong> Enabled
            </div>
            <div className="text-sm">
              <strong>Push Notifications:</strong> Disabled
            </div>
            <div className="text-sm">
              <strong>SMS Alerts:</strong> Enabled
            </div>
          </div>
        </SheetBody>
      </SheetContent>
    </Sheet>
  ),
};
