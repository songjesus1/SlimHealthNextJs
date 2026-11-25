import React from "react";
import "./CardLayout.css";
import "../../app/globals.css";

export interface CardLayoutProps {
  /** 자식 뷰 */
  children?: React.ReactNode;
}

export const CardLayout = ({ children }: CardLayoutProps) => {
  return <div className="cardLayout">{children}</div>;
};
