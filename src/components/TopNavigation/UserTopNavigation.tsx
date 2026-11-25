"use client";

import { useEffect, useState } from "react";
import { TopNavigation } from "./TopNavigation";
import { ROUTES } from "../../utils/routeUtils";
import { userInfoKey } from "../../utils/utils";

const signedOutMenu = [ROUTES.LOGIN, ROUTES.JOIN];
const signedInMenu = [
  ROUTES.DATA_INPUT_HISTORY,
  ROUTES.DATA_INPUT,
  ROUTES.PREDICTION,
  ROUTES.LOGOUT,
];

const getMenuForCurrentUser = () => {
  try {
    const userInfo = JSON.parse(
      window.localStorage.getItem(userInfoKey) || "null",
    )?.info;

    return userInfo ? signedInMenu : signedOutMenu;
  } catch {
    return signedOutMenu;
  }
};

export const UserTopNavigation = () => {
  const [menuList, setMenuList] = useState(signedOutMenu);

  useEffect(() => {
    const updateMenu = () => setMenuList(getMenuForCurrentUser());

    updateMenu();
    window.addEventListener("storage", updateMenu);
    window.addEventListener("userInfoChanged", updateMenu);

    return () => {
      window.removeEventListener("storage", updateMenu);
      window.removeEventListener("userInfoChanged", updateMenu);
    };
  }, []);

  return <TopNavigation menuList={menuList} />;
};
