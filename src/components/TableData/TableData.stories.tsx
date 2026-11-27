import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TableData } from "./TableData";

const meta: Meta<typeof TableData> = {
  title: "Components/TableData",
  component: TableData,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TableData>;

export const Default: Story = {
  args: {
    children: "TableData",
    isThick: false,
  },
};
