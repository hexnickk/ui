import type { Meta, StoryObj } from '@storybook/react';
import { Ul, Ol, Li } from '@/components/ui/list';
import { H3 } from '@/components/ui/typography';

const meta: Meta = {
  title: 'UI/List',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const AllLists: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div>
        <H3 className="mb-4">Unordered List</H3>
        <Ul>
          <Li>First item in the unordered list</Li>
          <Li>Second item with more content to demonstrate line wrapping and how the list handles longer text</Li>
          <Li>Third item</Li>
          <Li>Fourth item</Li>
        </Ul>
      </div>

      <div>
        <H3 className="mb-4">Ordered List</H3>
        <Ol>
          <Li>First step in the process</Li>
          <Li>Second step with detailed instructions that span multiple lines to show proper formatting</Li>
          <Li>Third step</Li>
          <Li>Fourth step</Li>
        </Ol>
      </div>
    </div>
  ),
};

export const UnorderedList: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Ul>
        <Li>React components for modern web applications</Li>
        <Li>TypeScript support for type safety</Li>
        <Li>Tailwind CSS for styling</Li>
        <Li>Storybook for component development</Li>
        <Li>Neobrutalist design aesthetic</Li>
      </Ul>
    </div>
  ),
};

export const OrderedList: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Ol>
        <Li>Install the required dependencies</Li>
        <Li>Configure your project settings</Li>
        <Li>Create your first component</Li>
        <Li>Add styles and customization</Li>
        <Li>Build and deploy your application</Li>
      </Ol>
    </div>
  ),
};

export const NestedLists: Story = {
  render: () => (
    <div className="max-w-2xl">
      <H3 className="mb-4">Project Structure</H3>
      <Ul>
        <Li>
          src
          <Ul className="mt-2 ml-6">
            <Li>components</Li>
            <Li>stories</Li>
            <Li>lib</Li>
          </Ul>
        </Li>
        <Li>
          public
          <Ul className="mt-2 ml-6">
            <Li>images</Li>
            <Li>fonts</Li>
          </Ul>
        </Li>
        <Li>package.json</Li>
      </Ul>
    </div>
  ),
};

export const MixedContent: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <H3>Getting Started</H3>
      <Ol>
        <Li>Clone the repository from GitHub</Li>
        <Li>
          Install dependencies:
          <Ul className="mt-2 ml-6">
            <Li>npm install</Li>
            <Li>yarn install</Li>
          </Ul>
        </Li>
        <Li>Start the development server</Li>
        <Li>Open your browser to localhost:3000</Li>
      </Ol>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div>
        <H3 className="mb-4">Custom Spacing</H3>
        <Ul className="space-y-4">
          <Li>Item with extra spacing</Li>
          <Li>Another item with extra spacing</Li>
          <Li>Third item with extra spacing</Li>
        </Ul>
      </div>

      <div>
        <H3 className="mb-4">Outside List Style</H3>
        <Ul className="list-outside ml-6">
          <Li>Item with outside list style position</Li>
          <Li>Another item that wraps to multiple lines to demonstrate how the outside list style position affects the layout</Li>
          <Li>Third item</Li>
        </Ul>
      </div>

      <div>
        <H3 className="mb-4">Different Markers</H3>
        <Ul className="list-[square]">
          <Li>Square bullet points</Li>
          <Li>Using custom list style</Li>
          <Li>Third item</Li>
        </Ul>
      </div>
    </div>
  ),
};
