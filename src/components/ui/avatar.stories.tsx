import type { Meta, StoryObj } from '@storybook/react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
} from './avatar';
import { CircleIcon } from 'lucide-react';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 'default',
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="John Smith" />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="/nonexistent.jpg" alt="Sarah Williams" />
        <AvatarFallback>SW</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>ED</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm">
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Small" alt="Small Avatar" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Default" alt="Default Avatar" />
        <AvatarFallback>DF</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Large" alt="Large Avatar" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Online" alt="Online User" />
        <AvatarFallback>OU</AvatarFallback>
        <AvatarBadge className="bg-green-500" />
      </Avatar>
      <Avatar>
        <AvatarFallback>BU</AvatarFallback>
        <AvatarBadge className="bg-amber-500" />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Active" alt="Active User" />
        <AvatarFallback>AU</AvatarFallback>
        <AvatarBadge className="bg-green-500">
          <CircleIcon className="fill-current" />
        </AvatarBadge>
      </Avatar>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User2" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User3" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>U4</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  ),
};
