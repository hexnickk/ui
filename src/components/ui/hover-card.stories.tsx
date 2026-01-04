import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" className="underline">@johndoe</a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">John Doe</h4>
          <p className="text-xs">
            Senior Software Engineer at TechCorp. Building the future of web applications.
          </p>
          <div className="text-xs text-muted-foreground">
            Joined January 2024
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
