import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    value: 30,
    onChange: () => {},
    maxValue: 150,
    minValue: 70,
  },
};
