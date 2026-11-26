import React from "react";
import "./ContentContainer.css";
import "../../app/globals.css";

export interface ContentContainerProps {
  /** 자식 뷰 */
  children?: React.ReactNode;
  /** 기타 스타일 */
  style?: React.CSSProperties;
}
export const ContentContainer = ({
  children,
  style,
}: ContentContainerProps) => {
  return (
    <div className="contentContainer" style={style}>
      {children}
    </div>
  );
};
