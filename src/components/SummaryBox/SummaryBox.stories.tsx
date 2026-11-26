import type { Meta, StoryContext, StoryObj } from "@storybook/nextjs-vite";
import { SummaryBox, SummaryBoxProps } from "./SummaryBox";
import { SummaryBoxGrade } from "./SummaryBoxGrade";
import { getEnumReference } from "@/src/utils/utils";

const meta: Meta<typeof SummaryBox> = {
  title: "Components/SummaryBox",
  component: SummaryBox,
  tags: ["autodocs"],
  argTypes: {
    grade: {
      control: "radio",
      options: Object.values(SummaryBoxGrade),
    },
  },
};

export default meta;

type Story = StoryObj<typeof SummaryBox>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        transform: (_source: string, context: StoryContext) => {
          const args = context.args as unknown as SummaryBoxProps;

          return `<SummaryBox
            grade={${getEnumReference(
              SummaryBoxGrade,
              args.grade ?? SummaryBoxGrade.위험,
              "SummaryBoxGrade",
            )}}
            overall_summary={${args.overall_summary}}
            syndrome_count={${args.syndrome_count}}
            recommended_loss_kg={${args.recommended_loss_kg}}
            recommended_reason={${args.recommended_reason}}
          />`;
        },
      },
    },
  },
  args: {
    grade: SummaryBoxGrade.위험,
    overall_summary: "대사증후군 위험",
    syndrome_count: 1,
    recommended_loss_kg: 10,
    recommended_reason: "대사증후군 위험률 감소",
  },
};
