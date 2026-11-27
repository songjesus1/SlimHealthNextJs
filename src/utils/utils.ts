import type { DataInputFieldModel } from "../model/health/DataInputFieldModel";
import pCharacter1 from "../assets/stage_1.png";
import pCharacter2 from "../assets/stage_2.png";
import pCharacter3 from "../assets/stage_3.png";
import pCharacter4 from "../assets/stage_4.png";
import pCharacter5 from "../assets/stage_5.png";
import pCharacter6 from "../assets/stage_6.png";
import pCharacter7 from "../assets/stage_7.png";
import pCharacter8 from "../assets/stage_8.png";
import pCharacter9 from "../assets/stage_9.png";
import { sliderWidth } from "../components/Slider";
import { CurrentCharacterStageForm } from "../model/health/CurrentCharacterStageForm";
import { HealthPredictResponse } from "../model/health/HealthPredictResponse";
import { HealthAdviceResponse } from "../model/health/HealthAdviceResponse";

export const userInfoKey = "userInfo";

export const maxAge = 200;
export const inputFixWidth = 140;
export const ocrImageSize = 509;

export const KPIInputFields = [
  {
    title: "허리둘레",
    placeholder: "현재 허리둘레(cm) 입력",
    key: "waist",
    unit: "cm",
  },
  {
    title: "HDL 콜레스테롤",
    placeholder: "현재 HDL 콜레스테롤 수치(mg/dl) 입력",
    key: "hdl",
    unit: "mg/dL",
  },
  {
    title: "수축기혈압",
    placeholder: "현재 수축기 혈압(mmHg) 입력",
    key: "sbp",
    unit: "mmHg",
  },
  {
    title: "이완기혈압",
    placeholder: "현재 이완기 혈압(mmHg) 입력",
    key: "dbp",
    unit: "mmHg",
  },
  {
    title: "공복혈당",
    placeholder: "현재 혈당(mg/dl) 입력",
    key: "bs",
    unit: "mg/dL",
  },
  {
    title: "중성지방",
    placeholder: "현재 중성지방(mg/dl) 입력",
    key: "tg",
    unit: "mg/dL",
  },
];

export const dataInputFields: DataInputFieldModel[] = [
  {
    title: "키",
    placeholder: "현재 키(cm) 입력",
    key: "userHeight",
    unit: "cm",
  },
  {
    title: "체중",
    placeholder: "현재 체중(kg) 입력",
    key: "userWeight",
    unit: "kg",
  },
  {
    title: "허리둘레",
    placeholder: "현재 허리둘레(cm) 입력",
    key: "waistLine",
    unit: "cm",
  },
  {
    title: "HDL 콜레스테롤",
    placeholder: "현재 HDL 콜레스테롤 수치(mg/dl) 입력",
    key: "cholesterol",
    unit: "mg/dl",
  },
  {
    title: "수축기 혈압",
    placeholder: "현재 수축기 혈압(mmHg) 입력",
    key: "systolicBp",
    unit: "mmHg",
  },
  {
    title: "이완기 혈압",
    placeholder: "현재 이완기 혈압(mmHg) 입력",
    key: "diastolicBp",
    unit: "mmHg",
  },
  {
    title: "공복시 혈당",
    placeholder: "현재 혈당(mg/dl) 입력",
    key: "bloodGlucose",
    unit: "mg/dl",
  },
  {
    title: "중성지방",
    placeholder: "현재 중성지방(mg/dl) 입력",
    key: "triglyceride",
    unit: "mg/dl",
  },
];

export const sliderImageList = [
  pCharacter1,
  pCharacter2,
  pCharacter3,
  pCharacter4,
  pCharacter5,
  pCharacter6,
  pCharacter7,
  pCharacter8,
  pCharacter9,
];

export const getCharacterRange = (bmi: number) => {
  // 매우 심한 비만
  if (bmi >= 40) {
    return {
      startStage: 1,
      endStage: 6,
      label: "매우 심한 비만",
    };
  }

  // 초고도 비만
  if (bmi >= 38) {
    return {
      startStage: 2,
      endStage: 6,
      label: "초고도 비만",
    };
  }

  // 고도 비만
  if (bmi >= 35) {
    return {
      startStage: 3,
      endStage: 7,
      label: "고도 비만",
    };
  }

  // 비만
  if (bmi >= 30) {
    return {
      startStage: 4,
      endStage: 7,
      label: "비만",
    };
  }

  // 과체중
  if (bmi >= 27) {
    return {
      startStage: 5,
      endStage: 8,
      label: "과체중",
    };
  }

  // 약간 통통
  if (bmi >= 25) {
    return {
      startStage: 6,
      endStage: 8,
      label: "약간 통통",
    };
  }

  // 정상
  if (bmi >= 22) {
    return {
      startStage: 7,
      endStage: 9,
      label: "정상",
    };
  }

  // 날씬
  if (bmi >= 18.5) {
    return {
      startStage: 8,
      endStage: 9,
      label: "날씬",
    };
  }

  // 매우 날씬
  return {
    startStage: 9,
    endStage: 9,
    label: "매우 날씬",
  };
};

export const getCurrentCharacterStage = ({
  bmi = 0,
  currentLossKg = 0,
  maxLossKg = 0,
}: CurrentCharacterStageForm) => {
  const { startStage, endStage } = getCharacterRange(bmi);

  // 감량 진행률
  const progress = Math.min(currentLossKg / maxLossKg, 1);

  // 현재 단계 계산
  const currentStage =
    startStage + Math.round((endStage - startStage) * progress);

  return currentStage;
};

export const sliderValueToWeight = (
  sliderValue: number,
  sliderMaxValue: number,
  sliderMinValue: number,
) => {
  return Math.trunc(
    sliderMaxValue -
      (sliderValue / sliderWidth) * (sliderMaxValue - sliderMinValue),
  );
};

export const weightToSliderValue = (
  weight: number,
  sliderMaxValue: number,
  sliderMinValue: number,
) => {
  return (
    ((sliderMaxValue - weight) / (sliderMaxValue - sliderMinValue)) *
    sliderWidth
  );
};

export const getBmi = (height: number, weight: number) => {
  //cm height를 미터 height로 변환
  const meterHeight = height / 100;
  return weight / (meterHeight * meterHeight);
};

export const convertKPIResultList = (
  healthData: HealthPredictResponse,
  adviceData: HealthAdviceResponse,
) => {
  const result = adviceData?.advices?.map((item) => {
    const targetField = KPIInputFields.find((field) => {
      return field.title == item.indicator;
    });
    const key = targetField?.key as
      | keyof NonNullable<HealthPredictResponse["physical"]>
      | undefined;
    return {
      key,
      indicator: item.indicator,
      status: item.status,
      unit: targetField?.unit,
      current_value: key ? healthData?.physical?.[key] : undefined,
      predictionValue: key ? healthData?.physical?.[key] : undefined,
      message: item.message,
    };
  });
  return result || [];
};

export const getEnumReference = <T extends Record<string, unknown>>(
  enumObject: T,
  value: T[keyof T],
  enumName: string,
) => {
  const entry = Object.entries(enumObject).find(([enumKey, enumValue]) => {
    return (
      enumValue === value || (typeof value === "string" && enumKey === value)
    );
  });

  return entry ? `${enumName}.${entry[0]}` : JSON.stringify(value);
};
