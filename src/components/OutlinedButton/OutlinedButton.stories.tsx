import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OutlinedButton } from "./OutlinedButton";

const meta: Meta<typeof OutlinedButton> = {
  title: "Components/OutlinedButton",
  component: OutlinedButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OutlinedButton>;

export const Default: Story = {
  args: {
    children: "OutlinedButton",
    isDisabled: false,
    onClick: () => {},
  },
};
