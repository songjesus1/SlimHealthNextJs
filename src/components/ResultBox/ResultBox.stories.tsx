import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ResultBox } from "./ResultBox";
import { ResultBoxStatusItems } from "./ResultBoxStatus";

const meta: Meta<typeof ResultBox> = {
  title: "Components/ResultBox",
  component: ResultBox,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "radio",
      options: Object.keys(ResultBoxStatusItems),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ResultBox>;

export const Default: Story = {
  args: {
    title: "제목",
    status: "위험",
    unit: "kg",
    currentValue: 60,
    predictionValue: 57,
    improvementContent: "설명",
  },
};
