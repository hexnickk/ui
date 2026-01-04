import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group';
import { Button } from './button';
import { Input } from './input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';
import {
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  SearchIcon,
} from 'lucide-react';

const meta: Meta<typeof ButtonGroup> = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">First</Button>
      <Button variant="secondary">Second</Button>
      <Button variant="secondary">Third</Button>
    </ButtonGroup>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary" size="icon">
        <AlignLeftIcon />
      </Button>
      <Button variant="secondary" size="icon">
        <AlignCenterIcon />
      </Button>
      <Button variant="secondary" size="icon">
        <AlignRightIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary" size="icon">
        <BoldIcon />
      </Button>
      <Button variant="secondary" size="icon">
        <ItalicIcon />
      </Button>
      <Button variant="secondary" size="icon">
        <UnderlineIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const WithSeparators: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary">Copy</Button>
      <Button variant="secondary">Cut</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Paste</Button>
    </ButtonGroup>
  ),
};

export const WithInput: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary" size="icon">
        <SearchIcon />
      </Button>
      <Input placeholder="Search files..." className="w-64" />
      <Button variant="secondary">Search</Button>
    </ButtonGroup>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Font Size</ButtonGroupText>
      <Select defaultValue="14">
        <SelectTrigger className="w-24">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="12">12px</SelectItem>
          <SelectItem value="14">14px</SelectItem>
          <SelectItem value="16">16px</SelectItem>
          <SelectItem value="18">18px</SelectItem>
        </SelectContent>
      </Select>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">Top</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Bottom</Button>
    </ButtonGroup>
  ),
};

export const MixedVariants: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="default">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="secondary">Reset</Button>
    </ButtonGroup>
  ),
};
