import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "../provider/AppProvider";
import { Dialog } from "../components/Dialog";
import { MainContainer } from "../components/MainContainer";

export const metadata: Metadata = {
  title: "슬림헬스",
  description: "대사증후군 5대 지표를 통한 분석 서비스",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppProvider>
          <MainContainer>{children}</MainContainer>
          <Dialog />
        </AppProvider>
      </body>
    </html>
  );
}
