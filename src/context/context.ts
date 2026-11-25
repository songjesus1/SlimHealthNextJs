import { createContext } from "react";
import { DialogProps } from "../components/Dialog";

interface ContextType {
  openDialog: (body: DialogProps) => void;
  closeDialog: () => void;
}

const Context = createContext<ContextType>({
  openDialog: () => {},
  closeDialog: () => {},
});
export default Context;
