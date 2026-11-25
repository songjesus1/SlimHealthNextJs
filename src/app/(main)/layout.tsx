import { UserTopNavigation } from "@/src/components/TopNavigation";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <UserTopNavigation />
      {children}
    </>
  );
}
