import React from "react";
import "./TableData.css";
import "../../app/globals.css";

export interface TableDataProps {
  /** 테이블 내용 */
  children?: React.ReactNode;
  /** 테두리 굵기 여부 */
  isThick?: boolean;
}

export const TableData = ({ children, isThick }: TableDataProps) => {
  return (
    <td
      className="tableData"
      style={isThick ? { border: "3px solid black" } : {}}
    >
      {children}
    </td>
  );
};
