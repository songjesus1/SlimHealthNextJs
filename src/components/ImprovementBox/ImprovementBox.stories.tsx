import type { Meta, StoryContext, StoryObj } from "@storybook/nextjs-vite";
import { ImprovementBox, ImprovementBoxProps } from "./ImprovementBox";
import { ImprovementBoxIconType } from "./ImprovementBoxIconType";
import { getEnumReference } from "@/src/utils/utils";

const meta: Meta<typeof ImprovementBox> = {
  title: "Components/ImprovementBox",
  component: ImprovementBox,
  tags: ["autodocs"],
  argTypes: {
    iconType: {
      control: "radio",
      options: Object.values(ImprovementBoxIconType),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImprovementBox>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        transform: (_source: string, context: StoryContext) => {
          const args = context.args as unknown as ImprovementBoxProps;

          return `<ImprovementBox
            iconType={${getEnumReference(
              ImprovementBoxIconType,
              args.iconType ?? ImprovementBoxIconType.heart,
              "ImprovementBoxIconType",
            )}}
            title={${args.title}}
            content={${args.content}}
          />`;
        },
      },
    },
  },
  args: {
    iconType: ImprovementBoxIconType.heart,
    title: "식습관 개선",
    content:
      "중성지방 수치가 다소 높습니다. 포화지방과 당분 섭취를 줄이고, 오메가-3 지방산이 풍부한 생선을 주 2-3회 섭취하세요.",
  },
};
