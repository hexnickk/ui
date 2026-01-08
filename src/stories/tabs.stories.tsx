import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultValue: 'overview',
    orientation: 'horizontal',
  },
  render: (args) => (
    <Tabs {...args} className="w-full max-w-md">
      <TabsList variant="default">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <div className="text-sm">
          View a comprehensive overview of your account activity, recent transactions, and important updates.
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="mt-4">
        <div className="text-sm">
          Access detailed analytics and insights about your performance metrics and user engagement.
        </div>
      </TabsContent>
      <TabsContent value="reports" className="mt-4">
        <div className="text-sm">
          Generate and download custom reports for your business intelligence needs.
        </div>
      </TabsContent>
    </Tabs>
  ),
};
