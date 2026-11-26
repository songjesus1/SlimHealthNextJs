import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    title: "라디오버튼",
    isChecked: true,
    onClick: () => {},
  },
};
