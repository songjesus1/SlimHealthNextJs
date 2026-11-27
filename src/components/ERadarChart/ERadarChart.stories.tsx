import type { Meta, StoryContext, StoryObj } from "@storybook/nextjs-vite";
import { ERadarChart } from "./ERadarChart";
import type { ERadarChartProps } from "./ERadarChart";

const meta: Meta<typeof ERadarChart> = {
  title: "Components/ERadarChart",
  component: ERadarChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        transform: (_source: string, context: StoryContext) => {
          const { metrics } = context.args as unknown as ERadarChartProps;
          const metricsSource = JSON.stringify(metrics, null, 2).replace(
            /\n/g,
            "\n  ",
          );

          return `<ERadarChart\n  metrics={${metricsSource}}\n/>`;
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ERadarChart>;

export const Default: Story = {
  args: {
    metrics: [
      { name: "허리둘레", current: 72, target: 100 },
      { name: "혈압", current: 45, target: 60 },
      { name: "중성지방", current: 80, target: 90 },
      { name: "HDL", current: 55, target: 70 },
      { name: "혈당", current: 92, target: 95 },
    ],
  },
};
