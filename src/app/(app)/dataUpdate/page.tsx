"use client";
import { getHealthDataApi } from "@/src/api/healthDataApi";
import { ContentContainer } from "@/src/components/ContentContainer";
import { HealthDataForm } from "@/src/model/health/HealthDataForm";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Text } from "@/src/components/Text";
import { Spacer } from "@/src/components/Spacer";
import { TextStyle } from "@/src/components/Text/TextStyle";
import { FlexDirection } from "@/src/components/FlexLayout/FlexDirection";
import { FlexLayout } from "@/src/components/FlexLayout";
import DataInputForm from "../dataInput/components/DataInputForm";
import OcrInputBox from "../dataInput/components/OcrInputBox";

const DataUpdate = () => {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  //이전 데이터 불러오기
  const { data: recentInputData } = useSuspenseQuery({
    queryKey: ["recentInput", id],
    queryFn: async () => {
      if (!id) {
        return null;
      } else {
        return (await getHealthDataApi(id)).physical;
      }
    },
  });

  const [formData, setFormData] = useState<HealthDataForm>(
    recentInputData
      ? {
          userHeight: recentInputData.height,
          userWeight: recentInputData.weight,
          waistLine: recentInputData.waist,
          cholesterol: recentInputData.hdl,
          systolicBp: recentInputData.sbp,
          diastolicBp: recentInputData.dbp,
          bloodGlucose: recentInputData.bs,
          triglyceride: recentInputData.tg,
        }
      : {
          userHeight: 0,
          userWeight: 0,
          waistLine: 0,
          cholesterol: 0,
          systolicBp: 0,
          diastolicBp: 0,
          bloodGlucose: 0,
          triglyceride: 0,
        },
  );

  const handleChangeForm = (
    key: keyof HealthDataForm,
    value: number | string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <ContentContainer>
      <Text textStyle={TextStyle.bold}>
        당신의 현재 건강 데이터를 입력하세요.
      </Text>
      <Text textStyle={TextStyle.bold}>
        또는 진단서 파일을 넣고 OCR로 입력할 수도 있습니다.
      </Text>
      <Text textStyle={TextStyle.bold}>
        (단, OCR 입력의 경우 검진일자와 음주여부와 흡연여부는 인식되지
        않습니다.)
      </Text>
      <Spacer height={30} />
      <FlexLayout direction={FlexDirection.row}>
        {/* 데이터 입력 부분 */}
        <DataInputForm
          id={id || ""}
          formData={formData}
          handleChange={handleChangeForm}
        />
        <Spacer width={120} />
        {/* ocr 입력 부분 */}
        <OcrInputBox setFormData={setFormData} />
      </FlexLayout>
    </ContentContainer>
  );
};

export default DataUpdate;
