import React from "react";
import "./Button.css";
import "../../app/globals.css";
import { Text } from "../Text";
import { TextAlign } from "../Text/TextAlign";

export interface ButtonProps {
  /** 버튼 내용 */
  children?: React.ReactNode;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 버튼 비활성화 여부 */
  isDisabled?: boolean;
}

export const Button = ({ children, onClick, isDisabled }: ButtonProps) => {
  return (
    <div
      className={`button ${isDisabled && "disabled"}`}
      onClick={isDisabled ? () => {} : onClick}
    >
      <Text align={TextAlign.center}>{children}</Text>
    </div>
  );
};
