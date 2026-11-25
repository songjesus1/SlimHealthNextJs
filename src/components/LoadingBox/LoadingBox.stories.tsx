import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LoadingBox } from "./LoadingBox";

const meta: Meta<typeof LoadingBox> = {
  title: "Components/LoadingBox",
  component: LoadingBox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoadingBox>;

export const Default: Story = {
  args: {},
};
