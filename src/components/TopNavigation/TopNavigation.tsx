"use client";
import React, { useContext } from "react";
import "./TopNavigation.css";
import "../../app/globals.css";
import { useRouter } from "next/navigation";
import { Logo } from "../Logo";
import { LinkButton } from "../LinkButton";
import { ROUTES } from "@/src/utils/routeUtils";
import backButton from "../../assets/backButton.png";
import Image from "next/image";
import { getRecentData } from "@/src/api/healthDataApi";
import { FlexLayout } from "../FlexLayout";
import { FlexDirection } from "../FlexLayout/FlexDirection";
import { FlexAlign } from "../FlexLayout/FlexAlign";
import Context from "@/src/context/context";
import { userInfoKey } from "@/src/utils/utils";

export interface TopNavigationProps {
  /** 뒤로가기 버튼 여부 */
  isBackButton?: boolean;
  /** 메뉴 리스트 */
  menuList: string[];
}

export const TopNavigation = ({
  isBackButton,
  menuList,
}: TopNavigationProps) => {
  const processLogout = () => {
    window.localStorage.removeItem(userInfoKey);
    window.dispatchEvent(new Event("userInfoChanged"));
  };
  const { openDialog, closeDialog } = useContext(Context);
  const router = useRouter();
  const navMenuList = [
    {
      key: ROUTES.LOGIN,
      title: "로그인",
      path: ROUTES.LOGIN,
      onClick: () => {
        router.push(ROUTES.LOGIN);
      },
    },
    {
      key: ROUTES.JOIN,
      title: "회원가입",
      path: ROUTES.JOIN,
      onClick: () => {
        router.push(ROUTES.JOIN);
      },
    },
    {
      key: ROUTES.MAIN,
      title: "메인으로",
      path: ROUTES.MAIN,
      onClick: () => {
        router.push(ROUTES.MAIN);
      },
    },
    {
      key: ROUTES.DATA_INPUT_HISTORY,
      title: "건강 데이터 조회",
      path: ROUTES.DATA_INPUT_HISTORY,
      onClick: () => {
        router.push(ROUTES.DATA_INPUT_HISTORY);
      },
    },
    {
      key: ROUTES.DATA_INPUT,
      title: "건강 데이터 입력",
      path: ROUTES.DATA_INPUT,
      onClick: () => {
        router.push(ROUTES.DATA_INPUT);
      },
    },
    {
      key: ROUTES.PREDICTION,
      title: "데이터 예측",
      path: ROUTES.PREDICTION,
      onClick: async () => {
        const recentData = await getRecentData();
        if (!recentData) {
          openDialog({
            title: "예측 불가",
            content:
              "데이터 저장기록이 없습니다. 먼저 건강 데이터 입력을 진행해주세요.",
            isCancelButton: false,
            onConfirmClick: closeDialog,
          });
        } else {
          router.push(`${ROUTES.PREDICTION}?id=${recentData.id}`);
        }
      },
    },
    {
      key: ROUTES.LOGOUT,
      title: "로그아웃",
      path: ROUTES.MAIN,
      onClick: () => {
        processLogout();
        router.push(ROUTES.MAIN);
      },
    },
  ];

  const finalMenuList = menuList.map((item) => {
    return navMenuList.find((menu) => {
      return menu.key == item;
    });
  });

  return (
    <div className="topNavigation">
      {isBackButton ? (
        <Image
          className="naviBackBtn"
          src={backButton}
          onClick={() => {
            router.back();
          }}
          width={20}
          height={20}
          alt="뒤로가기 버튼"
        />
      ) : (
        <Logo isTitle />
      )}
      <FlexLayout
        direction={FlexDirection.row}
        align={FlexAlign.end}
        style={{ flexGrow: 1 }}
      >
        {finalMenuList.map((item) => {
          return (
            <LinkButton key={item?.key} onClick={item?.onClick}>
              {item?.title}
            </LinkButton>
          );
        })}
      </FlexLayout>
    </div>
  );
};
