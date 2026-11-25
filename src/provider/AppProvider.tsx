"use client";

import ContextProvider from "./ContextProvider";
import QueryProvider from "./QueryProvicer";

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryProvider>
      <ContextProvider>{children}</ContextProvider>
    </QueryProvider>
  );
}
