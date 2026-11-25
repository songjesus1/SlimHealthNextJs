import type { Meta, StoryContext, StoryObj } from "@storybook/nextjs-vite";
import { MainGuide, MainGuideProps } from "./MainGuide";
import { MainGuideIconType } from "./MainGuideIconType";
import { getEnumReference } from "@/src/utils/utils";

const meta: Meta<typeof MainGuide> = {
  title: "Components/MainGuide",
  component: MainGuide,
  tags: ["autodocs"],
  argTypes: {
    iconType: {
      control: "radio",
      options: Object.values(MainGuideIconType),
    },
  },
};

export default meta;

type Story = StoryObj<typeof MainGuide>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        transform: (_source: string, context: StoryContext) => {
          const args = context.args as unknown as MainGuideProps;

          return `<MainGuide
            iconType={${getEnumReference(
              MainGuideIconType,
              args.iconType ?? MainGuideIconType.heart,
              "MainGuideIconType",
            )}}
            title={${args.title}}
            content={${args.content}}
          />`;
        },
      },
    },
  },
  args: {
    iconType: MainGuideIconType.heart,
    title: "건강 데이터 입력",
    content: "키, 나이, 체중 및 대사증후군 5대 요소를 간편하게 입력하세요",
  },
};
