import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { CheckIcon, XIcon, AlertCircleIcon } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    indicator: {
      control: 'select',
      options: ['default', 'dot', 'icon'],
    },
    children: {
      control: 'text',
    },
    asChild: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Badge',
  },
};

export const WithDotIndicator: Story = {
  args: {
    variant: 'default',
    indicator: 'dot',
    children: 'Online',
  },
};

export const WithIconIndicator: Story = {
  args: {
    variant: 'default',
    indicator: 'icon',
  },
  render: (args) => (
    <Badge {...args}>
      <CheckIcon />
      Verified
    </Badge>
  ),
};

export const AllIndicatorVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge indicator="dot">With Dot</Badge>
      <Badge indicator="icon">
        <CheckIcon />
        With Icon
      </Badge>
    </div>
  ),
};

export const AllVariantsWithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default" indicator="dot">Online</Badge>
      <Badge variant="secondary" indicator="dot">Pending</Badge>
      <Badge variant="destructive" indicator="dot">Offline</Badge>
      <Badge variant="outline" indicator="dot">Away</Badge>
    </div>
  ),
};

export const AllVariantsWithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default" indicator="icon">
        <CheckIcon />
        Success
      </Badge>
      <Badge variant="secondary" indicator="icon">
        <AlertCircleIcon />
        Info
      </Badge>
      <Badge variant="destructive" indicator="icon">
        <XIcon />
        Error
      </Badge>
      <Badge variant="outline" indicator="icon">
        <AlertCircleIcon />
        Warning
      </Badge>
    </div>
  ),
};
