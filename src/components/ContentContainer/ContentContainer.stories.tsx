import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContentContainer } from "./ContentContainer";

const meta: Meta<typeof ContentContainer> = {
  title: "Components/ContentContainer",
  component: ContentContainer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ContentContainer>;

export const Default: Story = {
  args: {
    children: "ContentContainer",
  },
};
