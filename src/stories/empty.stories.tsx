import type { Meta, StoryObj } from '@storybook/react';
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '@/components/ui/empty';
import { InboxIcon } from 'lucide-react';

const meta: Meta<typeof Empty> = {
  title: 'UI/Empty',
  component: Empty,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No messages found</EmptyTitle>
        <EmptyDescription>
          Your inbox is empty. Start a conversation or check back later for new messages.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};
