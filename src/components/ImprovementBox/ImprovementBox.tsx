import React from "react";
import "./ImprovementBox.css";
import "../../app/globals.css";
import heart from "../../assets/heart_outline.png";
import check from "../../assets/check_outline.png";
import lightning from "../../assets/lightning_outline.png";
import arrow from "../../assets/arrow_outline.png";
import { ImprovementBoxIconType } from "./ImprovementBoxIconType";
import { Text } from "../Text";
import Image from "next/image";
import { AppColor } from "@/src/enums/AppColor";
import { FlexLayout } from "../FlexLayout";
import { FlexDirection } from "../FlexLayout/FlexDirection";

export interface ImprovementBoxProps {
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
  /** 아이콘 타입 */
  iconType: ImprovementBoxIconType;
}

const ICONS = {
  heart,
  check,
  lightning,
  arrow,
};

export const ImprovementBox = ({
  title,
  content,
  iconType,
}: ImprovementBoxProps) => {
  const icon = ICONS[iconType as keyof typeof ICONS];

  return (
    <div className="improvementBox">
      <FlexLayout direction={FlexDirection.column} style={{ paddingTop: 2 }}>
        <Image
          className="iconImage"
          src={icon}
          alt="Improvement Icon"
          width={24}
          height={24}
        />
      </FlexLayout>
      <div className="improvementContent">
        <Text>{title}</Text>
        <Text color={AppColor.gray}>{content}</Text>
      </div>
    </div>
  );
};
