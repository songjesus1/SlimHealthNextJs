export const ResultBoxStatusItems = {
  위험: {
    bg: "#FCEBEB",
    title: "#791F1F",
    value: "#501313",
    unit: "#A32D2D",
    predict: "#A32D2D",
    message: "#791F1F",
    badgeBg: "#E24B4A",
    badgeText: "#501313",
  },
  주의: {
    bg: "#FAEEDA",
    title: "#633806",
    value: "#412402",
    unit: "#854F0B",
    predict: "#854F0B",
    message: "#633806",
    badgeBg: "#EF9F27",
    badgeText: "#412402",
  },
  정상: {
    bg: "#E1F5EE",
    title: "#085041",
    value: "#04342C",
    unit: "#0F6E56",
    predict: "#0F6E56",
    message: "#085041",
    badgeBg: "#1D9E75",
    badgeText: "#04342C",
  },
};

export type ResultBoxStatus =
  (typeof ResultBoxStatusItems)[keyof typeof ResultBoxStatusItems];
