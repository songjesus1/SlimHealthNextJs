import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CardLayout } from './CardLayout';

const meta: Meta<typeof CardLayout> = {
  title: 'Components/CardLayout',
  component: CardLayout,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof CardLayout>;

export const Default: Story = {
  args: {
    children : 'CardLayout'
  },
};