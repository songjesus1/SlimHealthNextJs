import React from "react";
import "./LinkButton.css";
import "../../app/globals.css";
import { Text } from "../Text";
import { AppColor } from "@/src/enums/AppColor";

export interface LinkButtonProps {
  /** 버튼 내용 */
  children?: React.ReactNode;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 버튼 비활성화 여부 */
  isDisabled?: boolean;
}

export const LinkButton = ({
  children,
  onClick,
  isDisabled,
}: LinkButtonProps) => {
  return (
    <div className="linkButton" onClick={isDisabled ? () => {} : onClick}>
      <Text isUnderLine color={isDisabled ? AppColor.gray : AppColor.blue}>
        {children}
      </Text>
    </div>
  );
};
