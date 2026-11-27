"use client";
import { ERadarChart } from "@/src/components/ERadarChart";
import { Slider } from "@/src/components/Slider";
import { HealthAdviceResponse } from "@/src/model/health/HealthAdviceResponse";
import React, { useMemo, useState } from "react";
import { Text } from "@/src/components/Text";
import { SummaryBox } from "@/src/components/SummaryBox";
import { ResultBox } from "@/src/components/ResultBox";
import { CardLayout } from "@/src/components/CardLayout";
import { Spacer } from "@/src/components/Spacer";
import { FlexLayout } from "@/src/components/FlexLayout";
import { FlexDirection } from "@/src/components/FlexLayout/FlexDirection";
import Image from "next/image";
import { FlexAlign } from "@/src/components/FlexLayout/FlexAlign";
import { HealthPredictResponse } from "@/src/model/health/HealthPredictResponse";
import {
  convertKPIResultList,
  getBmi,
  getCurrentCharacterStage,
  sliderImageList,
  sliderValueToWeight,
  weightToSliderValue,
} from "@/src/utils/utils";

interface PredictionTopUIProps {
  healthData: HealthPredictResponse;
  adviceData: HealthAdviceResponse;
}

const PredictionTopUI = ({ healthData, adviceData }: PredictionTopUIProps) => {
  //슬라이더 부분 계산
  const predictions = healthData.predictions;
  const sliderMaxValue = Math.trunc(healthData?.physical?.weight || 0);
  const sliderMinValue = sliderMaxValue - (predictions?.length || 0);
  const maxLossKg = predictions?.length;

  const initialWeight = sliderMaxValue;
  const bmi = getBmi(healthData?.physical?.height || 0, initialWeight);

  const [sliderValue, setSliderValue] = useState(
    weightToSliderValue(initialWeight, sliderMaxValue, sliderMinValue),
  );
  const [weight, setWeight] = useState(initialWeight);

  const currentLossKg = sliderMaxValue - weight;

  const currentSliderImage = useMemo(() => {
    return sliderImageList[
      getCurrentCharacterStage({
        bmi,
        currentLossKg,
        maxLossKg,
      }) - 1
    ];
  }, [bmi, currentLossKg, maxLossKg]);

  //5대 지표 부분
  const kpiResultList = useMemo(() => {
    return convertKPIResultList(healthData, adviceData).map((item) => {
      const key = item.key as
        | "waist"
        | "hdl"
        | "sbp"
        | "dbp"
        | "bs"
        | "tg"
        | undefined;

      const predictionIndex = predictions
        ? predictions.length - currentLossKg
        : -1;

      const predictionValue =
        currentLossKg === 0
          ? item.current_value
          : key &&
              predictionIndex >= 0 &&
              predictionIndex < (predictions?.length ?? 0)
            ? predictions?.[predictionIndex]?.[key]
            : item.current_value;

      return {
        ...item,
        predictionValue,
      };
    });
  }, [healthData, adviceData, predictions, currentLossKg]);

  //요약 박스
  const summary = {
    grade: adviceData.risk_level,
    overall_summary: adviceData.overall_summary,
    syndrome_count: adviceData.syndrome_count,
    recommended_loss_kg: adviceData.recommended_loss_kg,
    recommended_reason: adviceData.recommended_reason,
  };

  const handleChangeSlider = (value: number) => {
    setSliderValue(value);

    const nextWeight = sliderValueToWeight(
      value,
      sliderMaxValue,
      sliderMinValue,
    );

    setWeight(nextWeight);
  };

  return (
    <FlexLayout direction={FlexDirection.row} gap={20} style={{ width: "90%" }}>
      <FlexLayout direction={FlexDirection.column}>
        <FlexLayout direction={FlexDirection.row}>
          {/* 슬라이더 부분 */}
          <FlexLayout
            direction={FlexDirection.column}
            align={FlexAlign.center}
            gap={0}
          >
            <Image
              src={currentSliderImage}
              alt="상태 이미지"
              width={270}
              height={361}
            />
            <Slider
              onChange={(value) => {
                handleChangeSlider(value);
              }}
              value={sliderValue}
              maxValue={sliderMaxValue}
              minValue={sliderMinValue}
            />
            <Spacer height={10} />
            <Text>{`예측 체중 : ${weight}kg`}</Text>
          </FlexLayout>
          <Spacer height={30} />
          {/* 건강 요약 부분 */}
          <FlexLayout direction={FlexDirection.column} align={FlexAlign.center}>
            {summary && (
              <SummaryBox
                grade={summary.grade || ""}
                overall_summary={summary.overall_summary || ""}
                syndrome_count={summary.syndrome_count || 0}
                recommended_loss_kg={summary.recommended_loss_kg || 0}
                recommended_reason={summary.recommended_reason || ""}
              />
            )}
          </FlexLayout>
        </FlexLayout>
        <Spacer height={10} />
        {/* 5대 지표 예측 부분 */}
        <FlexLayout direction={FlexDirection.row}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}
          >
            {kpiResultList.map((item) => {
              const status =
                item.status === "정상" ||
                item.status === "주의" ||
                item.status === "위험"
                  ? item.status
                  : "위험";

              const currentValue =
                typeof item.current_value === "number" ? item.current_value : 0;

              const predictionValue =
                typeof item.predictionValue === "number"
                  ? item.predictionValue
                  : currentValue;

              return (
                <ResultBox
                  key={item.key}
                  title={item.indicator || ""}
                  status={status}
                  unit={item.unit || ""}
                  currentValue={currentValue}
                  predictionValue={predictionValue}
                  improvementContent={item.message || ""}
                />
              );
            })}
          </div>
        </FlexLayout>
      </FlexLayout>
      {/* 차트 부분 */}
      <CardLayout style={{ flex: 1, padding: 10 }}>
        <ERadarChart
          metrics={kpiResultList.map((item) => {
            const current =
              typeof item.current_value === "number" ? item.current_value : 0;
            const target =
              typeof item.predictionValue === "number"
                ? item.predictionValue
                : 0;

            return {
              current,
              name: item.indicator || "",
              target,
            };
          })}
        />
      </CardLayout>
    </FlexLayout>
  );
};

export default PredictionTopUI;
