import React from "react";
import "./Text.css";
import "../../app/globals.css";
import { TextStyle } from "./TextStyle";
import { TextAlign } from "./TextAlign";
import { AppColor } from "@/src/enums/AppColor";

export interface TextProps {
  /** 자식 뷰 */
  children?: React.ReactNode;
  /** 텍스트 스타일 */
  textStyle?: TextStyle;
  /** 밑줄 여부 */
  isUnderLine?: boolean;
  /** 그림자 효과 */
  isShadow?: boolean;
  /** 텍스트 정렬 */
  align?: TextAlign;
  /** 색깔 */
  color?: AppColor;
}

export const Text = ({
  children,
  textStyle = TextStyle.regular,
  align = TextAlign.left,
  isUnderLine,
  isShadow,
  color = AppColor.black,
}: TextProps) => {
  return (
    <div
      className={`text ${textStyle} ${isUnderLine && "underline"} ${isShadow && "shadow"}`}
      style={{
        textAlign: align as React.CSSProperties["textAlign"],
        color: color as React.CSSProperties["color"],
      }}
    >
      {children}
    </div>
  );
};
