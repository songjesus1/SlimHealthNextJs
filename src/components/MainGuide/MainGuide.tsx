import React from "react";
import "./MainGuide.css";
import "../../app/globals.css";
import heart from "../../assets/heart.png";
import arrow from "../../assets/arrow.png";
import shield from "../../assets/shield.png";
import { Text } from "../Text";
import { MainGuideIconType } from "./MainGuideIconType";
import Image from "next/image";

export interface MainGuideProps {
  /** 아이콘 타입 */
  iconType: MainGuideIconType;
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
}

const ICONS = {
  heart,
  arrow,
  shield,
};

export const MainGuide = ({ iconType, title, content }: MainGuideProps) => {
  const icon = ICONS[iconType as keyof typeof ICONS];
  return (
    <div className="mainGuide">
      <Image src={icon} alt="가이드 이미지" width={128} height={128} />
      <Text textStyle={"bold"} align={"center"}>
        {title}
      </Text>
      <Text align={"center"}>{content}</Text>
    </div>
  );
};
