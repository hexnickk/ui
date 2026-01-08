import type { Meta, StoryObj } from '@storybook/react';
import { H1, H2, H3, H4, P, Strong, Em } from '@/components/ui/typography';

const meta: Meta = {
  title: 'UI/Typography',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const AllElements: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <H1>Heading 1</H1>
        <P className="mt-2 text-muted-foreground">
          4xl size, bold weight - Used for page titles
        </P>
      </div>

      <div>
        <H2>Heading 2</H2>
        <P className="mt-2 text-muted-foreground">
          3xl size, bold weight - Used for section titles
        </P>
      </div>

      <div>
        <H3>Heading 3</H3>
        <P className="mt-2 text-muted-foreground">
          2xl size, bold weight - Used for subsection titles
        </P>
      </div>

      <div>
        <H4>Heading 4</H4>
        <P className="mt-2 text-muted-foreground">
          xl size, bold weight - Used for component titles
        </P>
      </div>

      <div>
        <P>
          This is a paragraph of body text. It uses the base text size with relaxed line height
          for comfortable reading. The neobrutalist design maintains high contrast with black
          text on a cream background.
        </P>
      </div>

      <div>
        <P>
          You can use <Strong>strong text for emphasis</Strong> and <Em>italic text for style</Em>.
          Combine them for <Strong><Em>strong italic text</Em></Strong>.
        </P>
      </div>
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <P>
        The quick brown fox jumps over the lazy dog. This is a sample paragraph
        demonstrating the default paragraph styling with relaxed line height.
      </P>
      <P>
        Typography is the art and technique of arranging type to make written language
        <Strong> legible</Strong>, <Strong>readable</Strong>, and <Em>appealing</Em> when displayed.
      </P>
    </div>
  ),
};
