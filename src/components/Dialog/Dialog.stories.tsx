"use client";
import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { DialogProps } from "./Dialog";
import "./Dialog.stories.css";
import { useModalStore } from "@/src/stores/modal.store";
import { Dialog } from "./Dialog";

type DialogStoryArgs = Pick<
  DialogProps,
  "title" | "content" | "isCancelButton" | "onConfirmClick"
>;

const meta: Meta<DialogStoryArgs> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  args: {
    title: "로그인 오류",
    content: "아이디 또는 비밀번호를 확인해주세요.",
    isCancelButton: true,
    onConfirmClick: () => useModalStore.getState().closeDialog(),
  },
  argTypes: {
    title: {
      control: "text",
      description: "다이얼로그 제목",
      table: { defaultValue: { summary: '"로그인 오류"' } },
    },
    content: {
      control: "text",
      description: "다이얼로그 내용",
      table: {
        defaultValue: { summary: '"아이디 또는 비밀번호를 확인해주세요."' },
      },
    },
    isCancelButton: {
      control: "boolean",
      description: "취소 버튼 표시 여부",
      table: { defaultValue: { summary: "true" } },
    },
    onConfirmClick: {
      control: false,
      description: "확인 버튼 클릭 이벤트",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: "() => {}" },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      source: {
        language: "tsx",
        transform: (_code: string, context: { args: DialogStoryArgs }) => {
          const { title, content, isCancelButton } = context.args;

          return `const openDialog = useModalStore((state) => state.openDialog);\n\nopenDialog({\n  title: ${JSON.stringify(title)},\n  content: ${JSON.stringify(content)},\n  isCancelButton: ${isCancelButton},\n  onConfirmClick: () => {},\n});`;
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const DialogStoryPreview = ({
  title,
  content,
  isCancelButton,
  onConfirmClick,
}: DialogStoryArgs) => {
  const isOpen = useModalStore((state) => state.isOpen);
  const openDialog = useModalStore((state) => state.openDialog);

  useEffect(() => {
    openDialog({ title, content, isCancelButton, onConfirmClick });
  }, [content, isCancelButton, onConfirmClick, openDialog, title]);

  return (
    <div className="dialog-story-preview">
      {!isOpen && (
        <button
          className="dialog-story-preview__open"
          onClick={() =>
            openDialog({ title, content, isCancelButton, onConfirmClick })
          }
        >
          다이얼로그 열기
        </button>
      )}
      <Dialog />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DialogStoryPreview {...args} />,
};
