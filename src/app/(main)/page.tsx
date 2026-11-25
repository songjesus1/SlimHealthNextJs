import { ContentContainer } from "@/src/components/ContentContainer/ContentContainer";
import { Introduction } from "@/src/components/Introduction";
import { Logo } from "@/src/components/Logo";
import { MainGuide } from "@/src/components/MainGuide";
import { Spacer } from "@/src/components/Spacer";
import { Text } from "@/src/components/Text";
import { TextStyle } from "@/src/components/Text/TextStyle";
import Image from "next/image";
import mainImage from "../../assets/mainImage.png";
import { FlexLayout } from "@/src/components/FlexLayout";
import { FlexAlign } from "@/src/components/FlexLayout/FlexAlign";
import { FlexDirection } from "@/src/components/FlexLayout/FlexDirection";
import { CardLayout } from "@/src/components/CardLayout";

const guideList = [
  {
    key: "heart",
    iconType: "heart",
    title: "건강 데이터 입력",
    content: "키, 나이, 체중 및 대사증후군 5대 요소를 간편하게 입력하세요",
  },
  {
    key: "arrow",
    iconType: "arrow",
    title: "AI 건강 예측",
    content: "머신러닝 알고리즘으로 건강 상태를 예측하고 시각화합니다",
  },
  {
    key: "shield",
    iconType: "shield",
    title: "개선 가이드",
    content: "개인 맞춤형 건강 개선 방안을 제공받으세요",
  },
];

export default function Home() {
  return (
    <ContentContainer>
      {/* 타이틀 부분 */}
      <FlexLayout
        direction={FlexDirection.column}
        align={FlexAlign.center}
        style={{ padding: 10 }}
      >
        <Spacer height={30} />
        <Logo isTitle />
        <Text textStyle={TextStyle.medium}>
          AI 기반 건강 예측 및 관리 시스템
        </Text>
      </FlexLayout>
      {/* 메인 이미지 부분 */}
      <Spacer height={20} />
      <Image src={mainImage} alt="Main Image" width={1400} height={1120} />
      <Spacer height={20} />
      {/* 소개 부분 */}
      <CardLayout style={{ width: "90%" }}>
        <FlexLayout direction={FlexDirection.column}>
          <Introduction
            title="프로젝트 소개"
            content="슬림헬스는 인공지능 기술을 활용하여 개인의 건강 데이터를 분석하고 예측하는 혁신적인 건강 관리 플랫폼입니다."
          />
          <FlexLayout
            align={FlexAlign.center}
            direction={FlexDirection.row}
            gap={50}
            style={{ padding: 50 }}
          >
            {guideList.map((item) => {
              return (
                <MainGuide
                  key={item.key}
                  content={item.content}
                  iconType={item.iconType}
                  title={item.title}
                />
              );
            })}
          </FlexLayout>
        </FlexLayout>
      </CardLayout>
      <Spacer height={30} />
    </ContentContainer>
  );
}
