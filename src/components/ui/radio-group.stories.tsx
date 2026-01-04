import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    defaultValue: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    defaultValue: 'comfortable',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className="text-sm">Default</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className="text-sm">Comfortable</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className="text-sm">Compact</label>
      </div>
    </RadioGroup>
  ),
};
