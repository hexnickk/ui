import type { Meta, StoryObj } from '@storybook/react';
import { MarqueeBar } from '@/components/ui/marquee-bar';

const meta: Meta<typeof MarqueeBar> = {
  title: 'UI/MarqueeBar',
  component: MarqueeBar,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of announcement strings to display',
    },
    speed: {
      control: 'select',
      options: ['slow', 'default', 'fast'],
      description: 'Animation speed of the marquee',
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Pause scrolling when hovering over the bar',
    },
    separator: {
      control: 'text',
      description: 'Element to display between items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MarqueeBar>;

export const Default: Story = {
  args: {
    items: [
      'Breaking News: New feature released',
      'System maintenance scheduled for tonight',
      'Welcome to our platform',
    ],
    speed: 'default',
    pauseOnHover: false,
  },
};

export const SlowSpeed: Story = {
  args: {
    items: [
      'Slow scrolling announcement',
      'Perfect for important messages',
      'Users have more time to read',
    ],
    speed: 'slow',
  },
};

export const FastSpeed: Story = {
  args: {
    items: [
      'Fast scrolling ticker',
      'Stock market updates',
      'Real-time data feed',
    ],
    speed: 'fast',
  },
};

export const WithPauseOnHover: Story = {
  args: {
    items: [
      'Hover over me to pause',
      'Great for user interaction',
      'Easy to read important updates',
    ],
    speed: 'default',
    pauseOnHover: true,
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      'Custom separator example',
      'Using a pipe symbol',
      'You can use any character',
    ],
    speed: 'default',
    separator: ' | ',
  },
};

export const StatusUpdates: Story = {
  args: {
    items: [
      'System Status: All systems operational',
      'API Response Time: 120ms',
      'Active Users: 1,234',
      'Uptime: 99.9%',
    ],
    speed: 'default',
    pauseOnHover: true,
  },
};

export const NewsTickerStyle: Story = {
  args: {
    items: [
      'Markets close higher for third consecutive day',
      'Tech sector leads gains with 2.5% increase',
      'Federal Reserve holds rates steady',
      'Oil prices decline amid supply concerns',
    ],
    speed: 'slow',
    pauseOnHover: true,
    separator: ' ⬥ ',
  },
};

export const MultipleAnnouncementBars: Story = {
  render: () => (
    <div className="space-y-0">
      <MarqueeBar
        items={['Primary announcement bar', 'Important updates here', 'Breaking news']}
        speed="default"
      />
      <MarqueeBar
        items={['Secondary info bar', 'Additional details', 'More content']}
        speed="fast"
        className="bg-accent text-accent-foreground"
      />
    </div>
  ),
};
