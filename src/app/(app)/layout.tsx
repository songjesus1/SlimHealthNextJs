import { LoadingBox } from "@/src/components/LoadingBox";
import { TopNavigation } from "@/src/components/TopNavigation";
import { Suspense, type ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNavigation isBackButton menuList={[]} />

      <Suspense fallback={<LoadingBox />}>{children}</Suspense>
    </>
  );
}
