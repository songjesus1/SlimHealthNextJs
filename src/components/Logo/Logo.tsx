import React from "react";
import "./Logo.css";
import "../../app/globals.css";
import { Text } from "../Text";
import { TextStyle } from "../Text/TextStyle";
import Image from "next/image";
import lightningYellow from "../../assets/lightning_yellow.png";

export interface LogoProps {
  /** 로고 옆에 타이틀 텍스트 표시 여부 */
  isTitle?: boolean;
}

export const Logo = ({ isTitle }: LogoProps) => {
  return (
    <div className="logo">
      <Image src={lightningYellow} alt="로고 이미지" width={24} height={24} />
      {isTitle && <Text textStyle={TextStyle.bold}>슬림헬스</Text>}
    </div>
  );
};
