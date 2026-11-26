"use client";
import { Button } from "@/src/components/Button";
import { HealthDataForm } from "@/src/model/health/HealthDataForm";
import { ocrImageSize } from "@/src/utils/utils";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FlexDirection } from "@/src/components/FlexLayout/FlexDirection";
import { FlexLayout } from "@/src/components/FlexLayout/FlexLayout";
import { FlexAlign } from "@/src/components/FlexLayout/FlexAlign";
import { useOcrInputApi } from "@/src/features/health/useOcrInputApi";
import { OcrInputApiResponse } from "@/src/model/health/OcrInputApiResponse";

interface OcrInputBoxProps {
  setFormData: React.Dispatch<React.SetStateAction<HealthDataForm>>;
}

const OcrInputBox = ({ setFormData }: OcrInputBoxProps) => {
  //ocr 이미지
  const [ocrImages, setOcrImages] = useState<File[] | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 파일 선택 버튼 클릭
  const handleButtonClick = () => {
    fileInputRef?.current?.click();
  };

  // 파일 선택 시 실행
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length > 0) {
      setOcrImages(files);
      setPreviewUrl(URL.createObjectURL(files[0]));

      //ocr 입력 api 연결
      handleOcrInput(files);
    } else {
      setOcrImages(null);
      setPreviewUrl(null);
    }
  };

  //ocr api 연결
  const ocrMutation = useOcrInputApi({
    onSuccess: (data: OcrInputApiResponse) => {
      const ocr = data.ocr;

      setFormData({
        userHeight: ocr?.height,
        userWeight: ocr?.weight,
        waistLine: ocr?.waist,
        cholesterol: ocr?.hdl,
        systolicBp: ocr?.sbp,
        diastolicBp: ocr?.dbp,
        bloodGlucose: ocr?.bs,
        triglyceride: ocr?.tg,
      });
    },
  });

  //ocr로 입력
  const handleOcrInput = (files: File[]) => {
    ocrMutation.mutate(files);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <FlexLayout direction={FlexDirection.column}>
      <div style={{ width: ocrImageSize + 20, height: ocrImageSize + 20 }}>
        {ocrImages?.[0] && previewUrl && (
          <>
            {ocrImages[0].type === "application/pdf" ? (
              <iframe
                src={previewUrl}
                width={ocrImageSize}
                height={ocrImageSize}
                title="pdf-viewer"
              />
            ) : (
              <Image
                src={previewUrl}
                alt="preview"
                unoptimized
                style={{
                  width: ocrImageSize,
                  height: ocrImageSize,
                  objectFit: "cover",
                }}
              />
            )}
          </>
        )}
      </div>
      <FlexLayout direction={FlexDirection.row} align={FlexAlign.center}>
        <Button onClick={handleButtonClick}>OCR로 입력</Button>
      </FlexLayout>
      <input
        type="file"
        multiple
        accept=".pdf,.png,.jpg,.jpeg,.webp,.gif,.bmp"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </FlexLayout>
  );
};

export default OcrInputBox;
