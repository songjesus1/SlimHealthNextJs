import { rowCount } from "@/src/utils/tableUtils";
import React from "react";
import { Text } from "@/src/components/Text";
import { TextStyle } from "@/src/components/Text/TextStyle";
import { OutlinedButton } from "@/src/components/OutlinedButton";
import { FlexLayout } from "@/src/components/FlexLayout";
import { FlexDirection } from "@/src/components/FlexLayout/FlexDirection";
import { FlexAlign } from "@/src/components/FlexLayout/FlexAlign";
import { HealthDataHistory } from "@/src/model/health/HealthDataHistory";

interface DataHistoryPaginationProps {
  data: HealthDataHistory[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const DataHistoryPagination = ({
  data,
  page,
  setPage,
}: DataHistoryPaginationProps) => {
  const maxPage = Math.ceil(data.length / rowCount);
  return (
    <FlexLayout direction={FlexDirection.row} align={FlexAlign.center}>
      {page >= 2 && (
        <OutlinedButton
          onClick={() => {
            setPage(page - 1);
          }}
        >
          이전
        </OutlinedButton>
      )}
      <Text textStyle={TextStyle.bold}>{page}</Text>
      {maxPage > page && (
        <OutlinedButton
          onClick={() => {
            setPage(page + 1);
          }}
        >
          다음
        </OutlinedButton>
      )}
    </FlexLayout>
  );
};

export default DataHistoryPagination;
