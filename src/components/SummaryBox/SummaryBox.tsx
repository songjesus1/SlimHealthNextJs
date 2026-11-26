import React from "react";
import "./SummaryBox.css";
import "../../app/globals.css";
import { SummaryBoxGrade } from "./SummaryBoxGrade";
import { Text } from "../Text";
import { TextStyle } from "../Text/TextStyle";

export interface SummaryBoxProps {
  /** 위험도 등급 */
  grade: SummaryBoxGrade;
  /** 요약 */
  overall_summary: string;
  /** 대사증후군 위험 항목 갯수 */
  syndrome_count: number;
  /** 권장 감량 체중 */
  recommended_loss_kg: number;
  /** 체중 감량 시 결과 */
  recommended_reason: string;
}

export const SummaryBox = ({
  grade,
  overall_summary,
  syndrome_count,
  recommended_loss_kg,
  recommended_reason,
}: SummaryBoxProps) => {
  const gradeClass =
    grade === "위험" ? "danger" : grade === "주의" ? "warning" : "normal";

  return (
    <div className={`summaryBox ${gradeClass}`}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span className={`summaryBadge ${gradeClass}`}>{grade}</span>
        <div style={{ fontSize: "30px", fontFamily: "Pretendard-Medium" }}>
          {overall_summary}
        </div>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <div className={`miniCard ${gradeClass}`}>
          <Text>대사증후군 항목</Text>
          <Text textStyle={TextStyle.bold}>{`${syndrome_count} / 5`}</Text>
        </div>
        <div className={`miniCard ${gradeClass}`}>
          <Text>권장 감량</Text>
          <Text textStyle={TextStyle.bold}>{`${recommended_loss_kg} kg`}</Text>
        </div>
      </div>
      <Text>{`${recommended_loss_kg}kg 감량 시, ${recommended_reason}`}</Text>
    </div>
  );
};
