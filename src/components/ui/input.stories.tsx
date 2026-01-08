import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'aria-invalid': {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
};

export const Small: Story = {
  args: {
    type: 'text',
    size: 'sm',
    placeholder: 'Small input...',
  },
};

export const Large: Story = {
  args: {
    type: 'text',
    size: 'lg',
    placeholder: 'Large input...',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-md">
      <Input size="sm" placeholder="Small input (h-6)" />
      <Input size="default" placeholder="Default input (h-8)" />
      <Input size="lg" placeholder="Large input (h-11)" />
    </div>
  ),
};
