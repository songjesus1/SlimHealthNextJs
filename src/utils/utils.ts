import type { DataInputFieldModel } from "../model/health/DataInputFieldModel";

export const userInfoKey = "userInfo";

export const maxAge = 200;
export const inputFixWidth = 140;
export const ocrImageSize = 509;

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
