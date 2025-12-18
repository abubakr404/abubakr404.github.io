import type { Meta, StoryObj } from '@storybook/react';
import { SpecialHeading } from './special-heading';

const meta = {
  title: 'UI/SpecialHeading',
  component: SpecialHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The main heading text',
    },
    backgroundText: {
      control: 'text',
      description: 'The large background text (defaults to children if not provided)',
    },
  },
} satisfies Meta<typeof SpecialHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'About Me',
  },
};

export const CustomBackground: Story = {
  args: {
    children: 'Portfolio',
    backgroundText: 'WORKS',
  },
};

export const LongText: Story = {
  args: {
    children: 'My Latest Projects',
    backgroundText: 'PROJECTS',
  },
};

export const Contact: Story = {
  args: {
    children: 'Get In Touch',
    backgroundText: 'CONTACT',
  },
};
