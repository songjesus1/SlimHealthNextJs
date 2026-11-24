import type { Meta, StoryContext, StoryObj } from "@storybook/nextjs-vite";
import { Text, TextProps } from "./Text";
import { TextStyle } from "./TextStyle";
import { TextAlign } from "./TextAlign";
import { AppColor } from "@/src/enums/AppColor";
import { getEnumReference } from "@/src/utils/utils";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    textStyle: {
      control: "radio",
      options: Object.values(TextStyle),
    },
    align: {
      control: "radio",
      options: Object.values(TextAlign),
    },
    color: {
      control: "radio",
      options: Object.keys(AppColor),
      mapping: AppColor,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        transform: (_source: string, context: StoryContext) => {
          const args = context.args as unknown as TextProps;

          return `<Text
            textStyle={${getEnumReference(
              TextStyle,
              args.textStyle ?? TextStyle.regular,
              "TextStyle",
            )}}
            align={${getEnumReference(
              TextAlign,
              args.align ?? TextAlign.left,
              "TextAlign",
            )}}
            color={${getEnumReference(
              AppColor,
              args.color ?? AppColor.black,
              "AppColor",
            )}}
            isUnderLine={${args.isUnderLine}}
            isShadow={${args.isShadow}}
          >
            {${JSON.stringify(args.children)}}
          </Text>`;
        },
      },
    },
  },
  args: {
    children: "Text",
    textStyle: TextStyle.regular,
    align: TextAlign.left,
    color: AppColor.black,
    isUnderLine: false,
    isShadow: false,
  },
};
