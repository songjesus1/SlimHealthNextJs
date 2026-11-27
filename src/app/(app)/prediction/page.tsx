"use client";
import { getHealthAdviceApi, getHealthDataApi } from "@/src/api/healthDataApi";
import { ContentContainer } from "@/src/components/ContentContainer";
import { Spacer } from "@/src/components/Spacer";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Text } from "@/src/components/Text";
import { TextStyle } from "@/src/components/Text/TextStyle";
import PredictionTopUI from "./components/PredictionTopUI";
import { CardLayout } from "@/src/components/CardLayout";
import PredictionImprovementUI from "./components/PredictionImprovementUI";
import PredictionAnalysisUI from "./components/PredictionAnalysisUI";

const Prediction = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";

  //예측 데이터 불러오기
  const { data: predictionData } = useSuspenseQuery({
    queryKey: ["prediction", id],
    queryFn: async () => {
      const [healthData, adviceData] = await Promise.all([
        getHealthDataApi(id),
        getHealthAdviceApi(id),
      ]);

      return { healthData, adviceData };
    },
  });

  const { healthData, adviceData } = predictionData;

  return (
    <ContentContainer>
      <Spacer height={20} />
      <Text textStyle={TextStyle.bold}>예측 결과</Text>
      <Spacer height={20} />
      <PredictionTopUI healthData={healthData} adviceData={adviceData} />
      <Spacer height={30} />
      {/* 개선사항 부분 */}
      <CardLayout
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          gap: 30,
        }}
      >
        <div style={{ width: 850 }}>
          <Text textStyle={"medium"}>개선사항</Text>
        </div>
        <PredictionImprovementUI adviceData={adviceData} />
      </CardLayout>
      <Spacer height={30} />
      {/* 긴 분석내용 부분 */}
      <PredictionAnalysisUI adviceData={adviceData} />
      <Spacer height={30} />
    </ContentContainer>
  );
};

export default Prediction;
