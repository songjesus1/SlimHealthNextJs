import type { Meta, StoryContext, StoryObj } from "@storybook/nextjs-vite";
import { TopNavigation, TopNavigationProps } from "./TopNavigation";
import { ROUTES } from "@/src/utils/routeUtils";
import { getEnumReference } from "@/src/utils/utils";

const meta: Meta<typeof TopNavigation> = {
  title: "Components/TopNavigation",
  component: TopNavigation,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    docs: {
      source: {
        transform: (_source: string, context: StoryContext) => {
          const args = context.args as unknown as TopNavigationProps;
          const menuList = args.menuList
            .map((route) => getEnumReference(ROUTES, route, "ROUTES"))
            .join(", ");

          return `<TopNavigation
            isBackButton={${args.isBackButton ?? false}}
            menuList={[${menuList}]}
          />`;
        },
      },
    },
  },
  argTypes: {
    menuList: {
      control: "check",
      options: Object.values(ROUTES).filter(
        (route) => route !== ROUTES.DATA_UPDATE,
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof TopNavigation>;

export const Default: Story = {
  args: { menuList: [], isBackButton: false },
};
