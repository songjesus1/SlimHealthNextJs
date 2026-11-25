import React from "react";
import "./CardLayout.css";
import "../../app/globals.css";

export interface CardLayoutProps {
  /** 자식 뷰 */
  children?: React.ReactNode;
  /** 기타 스타일 */
  style?: React.CSSProperties;
}

export const CardLayout = ({ children, style }: CardLayoutProps) => {
  return (
    <div className="cardLayout" style={style}>
      {children}
    </div>
  );
};
