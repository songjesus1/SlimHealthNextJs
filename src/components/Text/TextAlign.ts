export const TextAlign = {
  left: "left",
  center: "center",
  right: "right",
};

export type TextAlign = (typeof TextAlign)[keyof typeof TextAlign];
