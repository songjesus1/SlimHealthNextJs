"use client";
import { deleteDataHistory } from "@/src/api/healthDataApi";
import { Button } from "@/src/components/Button";
import { CheckBox } from "@/src/components/CheckBox";
import { TableData } from "@/src/components/TableData";
import Context from "@/src/context/context";
import { HealthDataHistory } from "@/src/model/health/HealthDataHistory";
import { ROUTES } from "@/src/utils/routeUtils";
import {
  deleteKey,
  modifyKey,
  predictionKey,
  rowCount,
  tableColumns,
} from "@/src/utils/tableUtils";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

interface DataHistoryTableProps {
  page: number;
  data: HealthDataHistory[];
}

const DataHistoryTable = ({ page, data }: DataHistoryTableProps) => {
  const { openDialog, closeDialog } = useContext(Context);
  const router = useRouter();
  const queryClient = useQueryClient();

  const startIndex = (page - 1) * rowCount;
  const endIndex = startIndex + rowCount;
  const dataHistoryList = data.slice(startIndex, endIndex);

  //버튼 기능
  const handleButtonClick = (id: number, key: string) => {
    switch (key) {
      case modifyKey:
        moveModifyHistoryPage(id);
        break;
      case deleteKey:
        openDeleteDialog(id);
        break;
      case predictionKey:
        movePredictionPage(id);
        break;
    }
  };

  //수정 버튼
  const moveModifyHistoryPage = (id: number) => {
    router.push(`${ROUTES.DATA_UPDATE}?id=${id}`);
  };

  const openDeleteDialog = (id: number) => {
    openDialog({
      title: "데이터 삭제 확인",
      content: "해당 데이터를 삭제하시겠습니까?",
      isCancelButton: true,
      onConfirmClick: () => {
        deleteHistory(id);
        closeDialog();
      },
    });
  };

  //삭제 버튼
  const deleteHistory = async (id: number) => {
    try {
      await deleteDataHistory(id);
      queryClient.setQueryData(
        ["healthDataHistories"],
        (oldData: HealthDataHistory[]) => {
          return oldData.filter((item) => item.id !== id);
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  //예측 버튼
  const movePredictionPage = (id: number) => {
    router.push(`${ROUTES.PREDICTION}?id=${id}`);
  };

  return (
    <table
      style={{
        width: "95%",
        tableLayout: "fixed",
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          {tableColumns.map((item) => {
            return (
              <TableData isThick key={item.key}>
                {item.title}
              </TableData>
            );
          })}
        </tr>
        {dataHistoryList.map((dataHistory) => {
          return (
            <tr key={dataHistory.id}>
              {tableColumns.map((column) => {
                const value =
                  dataHistory[column.key as keyof HealthDataHistory];

                return (
                  <TableData key={column.key}>
                    {column.type === "button" ? (
                      <Button
                        onClick={() => {
                          handleButtonClick(dataHistory.id || 0, column.key);
                        }}
                      >
                        {column.title}
                      </Button>
                    ) : column.type === "boolean" ? (
                      <CheckBox isChecked={Boolean(value)} />
                    ) : (
                      `${value}${column.unit || ""}`
                    )}
                  </TableData>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataHistoryTable;
