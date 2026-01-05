import type { Meta, StoryObj } from '@storybook/react';
import { Field, FieldLabel, FieldDescription } from './field';
import { Input } from './input';

const meta: Meta<typeof Field> = {
  title: 'UI/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="Enter your email" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  ),
};
