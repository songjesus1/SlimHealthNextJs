export const MainGuideIconType = {
  heart: "heart",
  arrow: "arrow",
  shield: "shield",
};

export type MainGuideIconType =
  (typeof MainGuideIconType)[keyof typeof MainGuideIconType];
