import React from "react";
import "./ResultBox.css";
import "../../app/globals.css";
import { ResultBoxStatus, ResultBoxStatusItems } from "./ResultBoxStatus";

export interface ResultBoxProps {
  /** 제목 */
  title: string;
  /** 상태 */
  status: keyof typeof ResultBoxStatusItems;
  /** 단위 */
  unit: string;
  /** 현재 값 */
  currentValue: number;
  /** 감량 시 예측 값 */
  predictionValue: number;
  /** 상태 설명 */
  improvementContent: string;
}

export const ResultBox = ({
  title,
  status,
  unit,
  currentValue,
  predictionValue,
  improvementContent,
}: ResultBoxProps) => {
  const theme = ResultBoxStatusItems[status];

  return (
    <div
      className="resultBox"
      style={{
        background: theme.bg,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <p
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: theme.title,
            margin: 0,
          }}
        >
          {title}
        </p>
        <span
          style={{
            fontSize: 18,
            fontWeight: 500,
            background: theme.badgeBg,
            color: theme.badgeText,
            padding: "2px 8px",
            borderRadius: 99,
          }}
        >
          {status}
        </span>
      </div>

      {/* 현재값 */}
      <p
        style={{
          fontSize: 22,
          fontWeight: 500,
          color: theme.value,
          margin: "0 0 2px",
        }}
      >
        <span style={{ fontSize: 18, color: theme.unit }}> 현재 : </span>
        {currentValue}
        <span style={{ fontSize: 18, color: theme.unit }}> {unit}</span>
      </p>

      {/* 예측값 */}
      <p style={{ fontSize: 18, color: theme.predict, margin: "0 0 8px" }}>
        예측 :{" "}
        <span style={{ fontSize: 22, color: theme.value }}>
          {predictionValue}
        </span>{" "}
        {unit}
      </p>

      {/* 상태 설명 */}
      <p
        style={{
          fontSize: 14,
          color: theme.message,
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {improvementContent}
      </p>
    </div>
  );
};
