import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible';
import { ChevronDownIcon } from 'lucide-react';

const meta: Meta<typeof Collapsible> = {
  title: 'UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    defaultOpen: false,
  },
  render: (args) => (
    <Collapsible {...args} className="w-full max-w-md">
      <CollapsibleTrigger>
        <span>View detailed specifications</span>
        <ChevronDownIcon className="size-4" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="space-y-1 text-sm">
          <div>• Processor: Intel Core i7-12700K</div>
          <div>• Memory: 32GB DDR4 RAM</div>
          <div>• Storage: 1TB NVMe SSD</div>
          <div>• Graphics: NVIDIA RTX 4070</div>
          <div>• Power Supply: 750W 80+ Gold</div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
