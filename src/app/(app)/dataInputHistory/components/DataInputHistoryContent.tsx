"use client";
import { getHealthDataHistories } from "@/src/api/healthDataApi";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Text } from "@/src/components/Text";
import DataHistoryTable from "./DataHistoryTable";
import DataHistoryPagination from "./DataHistoryPagination";
import { TextStyle } from "@/src/components/Text/TextStyle";
import { ContentContainer } from "@/src/components/ContentContainer";

const DataInputHistoryContent = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["healthDataHistories"],
    queryFn: async () => {
      return await getHealthDataHistories(1);
    },
  });

  const [page, setPage] = useState(1);

  return (
    <ContentContainer style={{ gap: 30 }}>
      <div></div>
      <Text textStyle={TextStyle.bold}>건강 데이터 조회</Text>

      <DataHistoryTable page={page} data={data} />

      {/* 페이지 이동 버튼 */}
      <DataHistoryPagination data={data} page={page} setPage={setPage} />
    </ContentContainer>
  );
};

export default DataInputHistoryContent;
