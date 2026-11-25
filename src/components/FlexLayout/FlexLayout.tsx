import React from "react";
import "./FlexLayout.css";
import "../../app/globals.css";
import { FlexDirection } from "./FlexDirection";
import { FlexAlign } from "./FlexAlign";

export interface FlexLayoutProps {
  /** inline-block 여부 */
  isInline?: boolean;
  /** 자식 뷰 */
  children?: React.ReactNode;
  /** 방향 */
  direction: FlexDirection;
  /** 간격 */
  gap?: number;
  /** 정렬 */
  align?: FlexAlign;
  /** 기타 스타일 */
  style?: React.CSSProperties;
}

export const FlexLayout = ({
  isInline,
  children,
  direction,
  gap = 10,
  align,
  style,
}: FlexLayoutProps) => {
  return (
    <div
      className="flexLayout"
      style={{
        ...style,
        display: (isInline
          ? "inline-flex"
          : "flex") as React.CSSProperties["display"],
        flexDirection: direction,
        gap,
        justifyContent: align,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};
