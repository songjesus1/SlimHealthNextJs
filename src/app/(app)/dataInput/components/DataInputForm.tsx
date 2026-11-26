"use client";
import React, { useContext } from "react";
import { Text } from "@/src/components/Text";
import { useRouter } from "next/navigation";
import Context from "@/src/context/context";
import { HealthDataForm } from "@/src/model/health/HealthDataForm";
import { ROUTES } from "@/src/utils/routeUtils";
import { dataInputFields, inputFixWidth } from "@/src/utils/utils";
import type { DataInputFieldModel } from "@/src/model/health/DataInputFieldModel";
import { useSaveHealthDataApi } from "@/src/features/health/useSaveHealthDataApi";
import { Input } from "@/src/components/Input/Input";
import { FlexLayout } from "@/src/components/FlexLayout";
import { FlexDirection } from "@/src/components/FlexLayout/FlexDirection";
import { Spacer } from "@/src/components/Spacer/Spacer";
import { CheckBox } from "@/src/components/CheckBox";
import { Button } from "@/src/components/Button";
import { FlexAlign } from "@/src/components/FlexLayout/FlexAlign";

interface DataInputFormProps {
  id?: string;
  recentInputData?: HealthDataForm | null;
  formData: HealthDataForm;
  handleChange: (key: keyof HealthDataForm, value: number | string) => void;
}

const DataInputForm = ({ id, formData, handleChange }: DataInputFormProps) => {
  const router = useRouter();
  const { openDialog, closeDialog } = useContext(Context);

  //저장 버튼 활성화 여부
  const isSaveButtonDisable =
    dataInputFields?.some((item: DataInputFieldModel) => !formData[item.key]) ||
    !formData.checkupDate;

  const saveHealthDataMutation = useSaveHealthDataApi({
    onSuccess: (data) => {
      openDialog({
        title: "데이터 저장 성공",
        content:
          "데이터가 저장되었습니다. 해당 데이터로 바로 예측하시겠습니까?",
        isCancelButton: true,
        onConfirmClick: async () => {
          if (id) {
            router.push(`${ROUTES.PREDICTION}?id=${id}`);
          } else {
            router.push(`${ROUTES.PREDICTION}?id=${data.phyid}`);
          }
          closeDialog();
        },
      });

      router.push(ROUTES.MAIN);
    },
  });

  const handleSaveDataDialog = () => {
    openDialog({
      title: "데이터 저장 확인",
      content: "이 데이터로 저장하시겠습니까?",
      isCancelButton: true,
      onConfirmClick: handleSaveData,
    });
  };

  //데이터 저장 버튼
  const handleSaveData = () => {
    saveHealthDataMutation.mutate({
      ...formData,
      id,
    });
  };

  return (
    <FlexLayout direction={FlexDirection.column}>
      {dataInputFields?.map((item) => {
        return (
          <Input
            key={item.key}
            fixWidth={inputFixWidth}
            maxLength={30}
            onChange={(e) => handleChange(item.key, e.target.value)}
            placeholder={item.placeholder}
            title={item.title}
            type="number"
            value={String(formData[item.key] ?? "")}
          />
        );
      })}
      <Spacer height={20} />
      <FlexLayout direction={FlexDirection.row} align={FlexAlign.center}>
        <Spacer height={30} />
        <Text>검진날짜</Text>
        <input
          type="date"
          value={formData.checkupDate}
          onChange={(e) => {
            handleChange("checkupDate", e.target.value);
          }}
          max="9999-12-31"
          style={{
            width: "220px",
            height: "44px",
            padding: "0 12px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </FlexLayout>
      <Spacer height={30} />
      <FlexLayout direction={FlexDirection.column} align={FlexAlign.center}>
        <CheckBox
          isChecked={formData.isDrink === 1}
          onClick={() => {
            handleChange("isDrink", formData.isDrink === 1 ? 0 : 1);
          }}
          title="음주여부"
        />
        <CheckBox
          isChecked={formData.isSmoke === 1}
          onClick={() => {
            handleChange("isSmoke", formData.isSmoke === 1 ? 0 : 1);
          }}
          title="흡연여부"
        />
      </FlexLayout>
      <Spacer height={30} />
      <FlexLayout direction={FlexDirection.row} align={FlexAlign.center}>
        <Button isDisabled={isSaveButtonDisable} onClick={handleSaveDataDialog}>
          건강 데이터 저장
        </Button>
      </FlexLayout>
    </FlexLayout>
  );
};

export default DataInputForm;
