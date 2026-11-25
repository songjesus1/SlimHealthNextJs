import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LinkButton } from "./LinkButton";

const meta: Meta<typeof LinkButton> = {
  title: "Components/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    children: "LinkButton",
    isDisabled: false,
    onClick: () => {},
  },
};
