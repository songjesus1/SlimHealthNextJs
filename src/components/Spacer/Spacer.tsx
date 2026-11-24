import React from "react";
import "./Spacer.css";
import "../../app/globals.css";

export interface SpacerProps {
  height?: number;
  width?: number;
}

export const Spacer = ({ height = 0, width = 0 }: SpacerProps) => {
  return <div className="spacer" style={{ height, width }}></div>;
};
