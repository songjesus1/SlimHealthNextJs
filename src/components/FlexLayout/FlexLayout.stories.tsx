import type { Meta, StoryContext, StoryObj } from "@storybook/nextjs-vite";
import { FlexLayout } from "./FlexLayout";
import { FlexDirection } from "./FlexDirection";
import { FlexAlign } from "./FlexAlign";
import { getEnumReference } from "@/src/utils/utils";

const meta: Meta<typeof FlexLayout> = {
  title: "Components/FlexLayout",
  component: FlexLayout,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "radio",
      options: Object.values(FlexDirection),
    },
    align: {
      control: "radio",
      options: Object.values(FlexAlign),
    },
  },
};

export default meta;

type Story = StoryObj<typeof FlexLayout>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        transform: (_source: string, context: StoryContext) => {
          const args = context.args as unknown as React.ComponentProps<
            typeof FlexLayout
          >;

          return `<FlexLayout
            isInline={${args.isInline}}
            direction={${getEnumReference(
              FlexDirection,
              args.direction ?? FlexDirection.row,
              "FlexDirection",
            )}}
            gap={${args.gap}}
            align={${getEnumReference(
              FlexAlign,
              args.align ?? FlexAlign.start,
              "FlexAlign",
            )}}
            style={${JSON.stringify(args.style)}}
          >
            {${JSON.stringify(args.children)}}
          </FlexLayout>`;
        },
      },
    },
  },
  args: {
    children: "FlexLayout",
    isInline: false,
    direction: FlexDirection.row,
    gap: 10,
    align: FlexAlign.center,
    style: {},
  },
};
