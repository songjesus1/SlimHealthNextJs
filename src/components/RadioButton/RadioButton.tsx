import React from "react";
import "./RadioButton.css";
import "../../app/globals.css";
import Image from "next/image";
import radioOn from "../../assets/radioOn.png";
import radioOff from "../../assets/radioOff.png";
import { Text } from "../Text";
import { TextStyle } from "../Text/TextStyle";

export interface RadioButtonProps {
  /** 라디오 버튼 제목 */
  title: string;
  /** 체크 여부 */
  isChecked: boolean;
  /** 클릭 이벤트 */
  onClick: () => void;
}

export const RadioButton = ({
  title,
  isChecked,
  onClick,
}: RadioButtonProps) => {
  return (
    <div className="radioButton" onClick={onClick}>
      <Text textStyle={TextStyle.medium}>{title}</Text>
      <Image
        src={isChecked ? radioOn : radioOff}
        alt={isChecked ? "radioOn" : "radioOff"}
        width={30}
        height={30}
      />
    </div>
  );
};
