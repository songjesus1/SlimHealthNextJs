export const ImprovementBoxIconType = {
  arrow: "arrow",
  heart: "heart",
  check: "check",
  lightning: "lightning",
};

export type ImprovementBoxIconType =
  (typeof ImprovementBoxIconType)[keyof typeof ImprovementBoxIconType];
