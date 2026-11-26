import React from "react";
import "./OutlinedButton.css";
import "../../app/globals.css";
import { Text } from "../Text";
import { TextAlign } from "../Text/TextAlign";
import { AppColor } from "@/src/enums/AppColor";

export interface OutlinedButtonProps {
  /** 버튼 내용 */
  children?: React.ReactNode;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 버튼 비활성화 여부 */
  isDisabled?: boolean;
}

export const OutlinedButton = ({
  children,
  onClick,
  isDisabled,
}: OutlinedButtonProps) => {
  return (
    <div
      className={`outlinedButton ${isDisabled && "disabled"}`}
      onClick={isDisabled ? () => {} : onClick}
    >
      <Text
        align={TextAlign.center}
        color={isDisabled ? AppColor.white : AppColor.black}
      >
        {children}
      </Text>
    </div>
  );
};
