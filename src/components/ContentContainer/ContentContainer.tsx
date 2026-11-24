import React from "react";
import "./ContentContainer.css";
import "../../app/globals.css";

export interface ContentContainerProps {
  /** 자식 뷰 */
  children?: React.ReactNode;
}
export const ContentContainer = ({ children }: ContentContainerProps) => {
  return <div className="contentContainer">{children}</div>;
};
