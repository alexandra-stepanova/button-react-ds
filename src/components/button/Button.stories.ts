import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: '4',
    primary: true,
    label: 'Button',
    ariaLabel: 'primary button',
  },
};

export const Secondary: Story = {
  args: {
    id: '3',
    label: 'Button',
    ariaLabel: 'secondary button',
  },
};

export const Large: Story = {
  args: {
    id: '1',
    size: 'large',
    label: 'Button',
    ariaLabel: 'button large',
  },
};

export const Small: Story = {
  args: {
    id: '2',
    size: 'small',
    label: 'Button',
    ariaLabel: 'button small',
  },
};
