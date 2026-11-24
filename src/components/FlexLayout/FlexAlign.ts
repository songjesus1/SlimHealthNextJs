export const FlexAlign = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
} as const;

export type FlexAlign = (typeof FlexAlign)[keyof typeof FlexAlign];
