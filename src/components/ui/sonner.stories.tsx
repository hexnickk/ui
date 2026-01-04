import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from './sonner';
import { Button } from './button';
import { toast } from 'sonner';

const meta: Meta<typeof Toaster> = {
  title: 'UI/Sonner',
  component: Toaster,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="flex flex-col gap-2">
        <Button onClick={() => toast('Event has been created')}>Show Default Toast</Button>
        <Button
          onClick={() =>
            toast('Meeting Reminder', {
              description: 'Team standup starts in 5 minutes',
            })
          }
        >
          Show Toast with Description
        </Button>
      </div>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="flex flex-col gap-2">
        <Button onClick={() => toast.success('Changes saved successfully')}>Show Success</Button>
        <Button
          onClick={() =>
            toast.success('Profile Updated', {
              description: 'Your profile information has been saved',
            })
          }
        >
          Success with Description
        </Button>
      </div>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="flex flex-col gap-2">
        <Button onClick={() => toast.warning('Storage space is running low')}>
          Show Warning
        </Button>
        <Button
          onClick={() =>
            toast.warning('Unsaved Changes', {
              description: 'You have unsaved changes that will be lost',
            })
          }
        >
          Warning with Description
        </Button>
      </div>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="flex flex-col gap-2">
        <Button onClick={() => toast.error('Failed to upload file')}>Show Error</Button>
        <Button
          onClick={() =>
            toast.error('Connection Failed', {
              description: 'Unable to connect to the server. Please try again.',
            })
          }
        >
          Error with Description
        </Button>
      </div>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() => {
          const id = toast.loading('Processing your request...');
          setTimeout(() => {
            toast.success('Request completed', { id });
          }, 2000);
        }}
      >
        Show Loading Toast
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast('File Deleted', {
            description: 'document.pdf has been moved to trash',
            action: {
              label: 'Undo',
              onClick: () => toast('File restored'),
            },
          })
        }
      >
        Show Toast with Action
      </Button>
    </div>
  ),
};
