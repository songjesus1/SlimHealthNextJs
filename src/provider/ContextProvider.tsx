"use client";

import React from "react";
import Context from "../context/context";
import { useModalStore } from "../stores/modal.store";

export interface ContextProps {
  children?: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => {
  const openDialog = useModalStore((state) => state.openDialog);

  const closeDialog = useModalStore((state) => state.closeDialog);

  return (
    <Context.Provider
      value={{
        openDialog,
        closeDialog,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
