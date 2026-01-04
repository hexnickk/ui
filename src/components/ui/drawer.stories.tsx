import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from './drawer';
import { Button } from './button';

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open Menu</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>
            Select a page to navigate to
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 space-y-2">
          <div className="text-sm">Dashboard</div>
          <div className="text-sm">Analytics</div>
          <div className="text-sm">Reports</div>
          <div className="text-sm">Settings</div>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="secondary">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
