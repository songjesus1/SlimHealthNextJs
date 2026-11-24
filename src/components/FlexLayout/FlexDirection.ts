export const FlexDirection = {
  row: "row",
  column: "column",
} as const;

export type FlexDirection = (typeof FlexDirection)[keyof typeof FlexDirection];
