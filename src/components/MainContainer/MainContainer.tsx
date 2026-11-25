import React from "react";
import "./MainContainer.css";
import "../../app/globals.css";

export interface MainContainerProps {
  /** 자식 컴포넌트 */
  children?: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="mainContainer">{children}</div>;
};
