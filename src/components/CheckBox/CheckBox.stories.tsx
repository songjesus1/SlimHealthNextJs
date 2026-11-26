import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckBox } from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
  title: "Components/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    title: "체크박스",
    isChecked: true,
    onClick: () => {},
  },
};
