import { create } from "zustand";
import { DialogProps } from "../components/Dialog";

type ModalStore = {
  isOpen: boolean;
  props: DialogProps;

  openDialog: (props: DialogProps) => void;
  closeDialog: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,

  props: {
    title: "",
    content: "",
    isCancelButton: false,
    onConfirmClick: () => {},
  },

  openDialog: (props) => set({ isOpen: true, props }),

  closeDialog: () => set({ isOpen: false }),
}));
