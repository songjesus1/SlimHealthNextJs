import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spacer } from "./Spacer";

const meta: Meta<typeof Spacer> = {
  title: "Components/Spacer",
  component: Spacer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {
    height: 0,
    width: 0,
  },
};
