import React from "react";
import "./CheckBox.css";
import "../../app/globals.css";
import Image from "next/image";
import checkbox from "../../assets/checkbox.png";
import unchecked from "../../assets/unchecked.png";
import { Text } from "../Text";
import { TextStyle } from "../Text/TextStyle";

export interface CheckBoxProps {
  /** 체크박스 제목 */
  title?: string;
  /** 체크 여부 */
  isChecked: boolean;
  /** 클릭 이벤트 */
  onClick?: () => void;
}

export const CheckBox = ({
  title = "",
  isChecked,
  onClick = () => {},
}: CheckBoxProps) => {
  return (
    <div className="checkBox" onClick={onClick}>
      <Text textStyle={TextStyle.medium}>{title}</Text>
      <Image
        src={isChecked ? checkbox : unchecked}
        alt={isChecked ? "checked" : "unchecked"}
        width={30}
        height={30}
      />
    </div>
  );
};
