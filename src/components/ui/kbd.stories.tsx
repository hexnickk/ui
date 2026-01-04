import type { Meta, StoryObj } from '@storybook/react';
import { Kbd, KbdGroup } from './kbd';

const meta: Meta<typeof Kbd> = {
  title: 'UI/Kbd',
  component: Kbd,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Press</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>C</Kbd>
        </KbdGroup>
        <span className="text-sm">to copy</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Press</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>V</Kbd>
        </KbdGroup>
        <span className="text-sm">to paste</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Press</span>
        <Kbd>Esc</Kbd>
        <span className="text-sm">to cancel</span>
      </div>
    </div>
  ),
};
