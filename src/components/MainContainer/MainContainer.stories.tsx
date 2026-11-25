import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MainContainer } from './MainContainer';

const meta: Meta<typeof MainContainer> = {
  title: 'Components/MainContainer',
  component: MainContainer,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MainContainer>;

export const Default: Story = {
  args: {
    children : 'MainContainer'
  },
};