import { totalInputFields } from "./utils";

export const rowCount = 10;

export const modifyKey = "modify";
export const deleteKey = "delete";
export const predictionKey = "prediction";

export const tableColumns = [
  {
    title: "번호",
    key: "id",
    type: "number",
    unit: "",
  },
  {
    title: "검진날짜",
    key: "date",
    type: "string",
    unit: "",
  },
  ...totalInputFields,
  {
    title: "수정",
    key: modifyKey,
    type: "button",
    unit: "",
  },
  {
    title: "삭제",
    key: deleteKey,
    type: "button",
    unit: "",
  },
  {
    title: "예측",
    key: predictionKey,
    type: "button",
    unit: "",
  },
];
