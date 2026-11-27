import { Suspense } from "react";
import { LoadingBox } from "@/src/components/LoadingBox";
import DataInputHistoryContent from "./components/DataInputHistoryContent";

const DataInputHistory = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <DataInputHistoryContent />
    </Suspense>
  );
};

export default DataInputHistory;
