import React from "react";
import "../../app/globals.css";
import ReactECharts from "echarts-for-react";
import { ChartMetricsModel } from "@/src/model/health/ChartMetricsModel";

const currentColor = "#5470c6";
const predictionColor = "#a3cc75";

export interface ERadarChartProps {
  metrics: ChartMetricsModel[];
}

export const ERadarChart = ({ metrics }: ERadarChartProps) => {
  const option = {
    animation: false,
    title: {
      text: "5대 지표 차트",
      textStyle: {
        fontSize: 25,
        fontWeight: 700,
      },
    },
    legend: {
      data: ["현재값", "예측값"],
      textStyle: {
        fontSize: 20,
        fontWeight: 500,
      },
    },
    radar: {
      center: ["50%", "56%"],
      radius: "68%",
      axisName: {
        fontSize: 20,
        fontWeight: 500,
      },
      indicator: metrics.map((item) => {
        const name = item?.name?.replace("콜레스테롤", "");
        const currentVal = item.current || 0;
        const isHDL = name === "HDL";
        const max = isHDL
          ? Math.round(currentVal * 1.5)
          : Math.round(currentVal * 1.15);
        return { name, max };
      }),
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            name: "예측값",
            value: metrics.map((item) => {
              const current = item.current || 0;
              const target = item.target || 0;
              return current - (current - target) * 3;
            }),
            itemStyle: {
              color: predictionColor,
            },
            lineStyle: {
              color: predictionColor,
            },
          },
          {
            name: "현재값",
            value: metrics.map((item) => item.current),
            itemStyle: {
              color: currentColor,
            },
            lineStyle: {
              color: currentColor,
            },
          },
        ],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      notMerge={true}
      lazyUpdate={false}
      opts={{ renderer: "canvas" }}
      style={{ width: "550px", height: "750px" }}
    />
  );
};
