import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription, AlertAction } from './alert';
import { Button } from './button';
import { XIcon } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'destructive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>System Update Available</AlertTitle>
      <AlertDescription>
        A new version of the application is ready to install. This update includes performance improvements and bug fixes.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Deployment Successful</AlertTitle>
      <AlertDescription>
        Your changes have been deployed to production successfully. All services are running normally.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Storage Nearly Full</AlertTitle>
      <AlertDescription>
        You are using 89% of your storage quota. Consider upgrading your plan or removing old files.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Service Outage Detected</AlertTitle>
      <AlertDescription>
        We are experiencing connectivity issues with the database. Our team is working to resolve this immediately.
      </AlertDescription>
    </Alert>
  ),
};

export const WithAction: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Cookie Policy Updated</AlertTitle>
      <AlertDescription>
        We have updated our cookie policy to comply with new regulations.{' '}
        <a href="#" className="underline">Learn more</a>
      </AlertDescription>
      <AlertAction>
        <Button variant="ghost" size="icon-sm">
          <XIcon />
        </Button>
      </AlertAction>
    </Alert>
  ),
};
