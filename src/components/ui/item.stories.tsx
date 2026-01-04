import type { Meta, StoryObj } from '@storybook/react';
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription } from './item';
import { UserIcon } from 'lucide-react';

const meta: Meta<typeof Item> = {
  title: 'UI/Item',
  component: Item,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'muted'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    variant: 'outline',
    size: 'default',
  },
  render: (args) => (
    <Item {...args}>
      <ItemMedia variant="icon">
        <UserIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Sarah Johnson</ItemTitle>
        <ItemDescription>
          Senior Software Engineer at TechCorp. Specializing in distributed systems and cloud architecture.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
};
