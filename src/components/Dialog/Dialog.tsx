"use client";
import React, { useContext } from "react";
import "./Dialog.css";
import "../../app/globals.css";
import Context from "@/src/context/context";
import { Text } from "../Text";
import { TextStyle } from "../Text/TextStyle";
import { TextAlign } from "../Text/TextAlign";
import { FlexLayout } from "../FlexLayout";
import { FlexDirection } from "../FlexLayout/FlexDirection";
import { OutlinedButton } from "../OutlinedButton";
import { Button } from "../Button";
import { useModalStore } from "@/src/stores/modal.store";

export interface DialogProps {
  /** 다이얼로그 제목 */
  title: string;
  /** 다이얼로그 내용 */
  content: string;
  /** 취소 버튼 여부 */
  isCancelButton?: boolean;
  /** 확인 버튼 클릭 이벤트 */
  onConfirmClick?: () => void;
}

export const Dialog = () => {
  const { isOpen, props, closeDialog } = useModalStore();

  const { title, content, isCancelButton, onConfirmClick } = props;

  if (!isOpen) return null;
  return (
    <div className="modal-backdrop" onClick={closeDialog}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Text textStyle={TextStyle.bold}>{title}</Text>
        <Text align={TextAlign.center}>{content}</Text>
        <FlexLayout direction={FlexDirection.row}>
          {isCancelButton && (
            <OutlinedButton onClick={closeDialog}>취소</OutlinedButton>
          )}
          <Button onClick={onConfirmClick || closeDialog}>확인</Button>
        </FlexLayout>
      </div>
    </div>
  );
};
