"use client";
import { ContentContainer } from "@/src/components/ContentContainer/ContentContainer";
import { Spacer } from "@/src/components/Spacer/Spacer";
import { Text } from "@/src/components/Text";
import { TextStyle } from "@/src/components/Text/TextStyle";
import { HealthDataForm } from "@/src/model/health/HealthDataForm";
import React, { useState } from "react";
import OcrInputBox from "./components/OcrInputBox";
import DataInputForm from "./components/DataInputForm";
import { FlexLayout } from "@/src/components/FlexLayout/FlexLayout";
import { FlexDirection } from "@/src/components/FlexLayout/FlexDirection";

const DataInput = () => {
  const [formData, setFormData] = useState<HealthDataForm>({
    userHeight: 0,
    userWeight: 0,
    waistLine: 0,
    cholesterol: 0,
    systolicBp: 0,
    diastolicBp: 0,
    bloodGlucose: 0,
    triglyceride: 0,
    isDrink: 0,
    isSmoke: 0,
    checkupDate: "",
  });

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
          id={""}
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

export default DataInput;
