export const SummaryBoxGrade = {
  위험: "위험",
  주의: "주의",
  정상: "정상",
};

export type SummaryBoxGrade =
  (typeof SummaryBoxGrade)[keyof typeof SummaryBoxGrade];
