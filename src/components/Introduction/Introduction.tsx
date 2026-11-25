import React from "react";
import "./Introduction.css";
import "../../app/globals.css";
import { TextStyle } from "../Text/TextStyle";
import { Text } from "../Text";

export interface IntroductionProps {
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
}

export const Introduction = ({ title, content }: IntroductionProps) => {
  return (
    <div className="introduction">
      <Text textStyle={TextStyle.bold}>{title}</Text>
      <Text>{content}</Text>
    </div>
  );
};
