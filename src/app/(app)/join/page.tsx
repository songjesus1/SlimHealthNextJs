"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Context from "@/src/context/context";
import { JoinForm } from "@/src/model/user/JoinForm";
import { Input } from "@/src/components/Input/Input";
import { inputFixWidth, maxAge } from "@/src/utils/utils";
import { OutlinedButton } from "@/src/components/OutlinedButton/OutlinedButton";
import { Text } from "@/src/components/Text";
import { TextStyle } from "@/src/components/Text/TextStyle";
import { ContentContainer } from "@/src/components/ContentContainer/ContentContainer";
import { Button } from "@/src/components/Button/Button";
import { RadioButton } from "@/src/components/RadioButton/RadioButton";
import { Gender } from "@/src/enums/Gender";
import { FlexLayout } from "@/src/components/FlexLayout";
import { FlexDirection } from "@/src/components/FlexLayout/FlexDirection";
import { FlexAlign } from "@/src/components/FlexLayout/FlexAlign";
import { useCheckDuplicateAccountApi } from "@/src/features/user/useCheckDuplicateAccountApi";
import { useJoinApi } from "@/src/features/user/useJoinApi";
import { ROUTES } from "@/src/utils/routeUtils";

const Join = () => {
  const router = useRouter();
  const { openDialog, closeDialog } = useContext(Context);

  const [joinForm, setJoinForm] = useState<JoinForm>({
    account: "",
    password: "",
    confirmPassword: "",
    name: "",
    gender: undefined,
    birthYear: 0,
    email: "",
    phoneNumber: "",
  });
  const handleJoinFormChange = (
    field: keyof JoinForm,
    value: string | number | boolean,
  ) => {
    setJoinForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const checkDuplicateMutation = useCheckDuplicateAccountApi({
    onSuccess: (data) => {
      //아이디 중복여부 검증
      let content;
      if (data.isDuplicate) {
        content = "중복된 아이디입니다.";
      } else {
        content = "사용할 수 있는 아이디입니다.";
      }
      handleJoinFormChange("isCheckedAccount", !data.isDuplicate);

      //결과에 맞는 대화창 열기
      openDialog({
        title: "아이디 중복확인",
        content: content,
        isCancelButton: false,
        onConfirmClick: closeDialog,
      });
    },
  });

  //중복확인 함수
  const handleCheckDuplicate = () => {
    checkDuplicateMutation.mutate(joinForm.account || "");
  };

  const joinMutation = useJoinApi({
    onSuccess: () => {
      openDialog({
        title: "회원가입 성공",
        content: "회원가입이 성공하였습니다.",
        isCancelButton: false,
        onConfirmClick: closeDialog,
      });

      //회원가입 성공 시 메인으로 돌아가기
      router.push(ROUTES.MAIN);
    },
    onError: () => {
      openDialog({
        title: "회원가입 실패",
        content: "입력정보를 다시 확인해주세요.",
        isCancelButton: false,
        onConfirmClick: closeDialog,
      });
    },
  });

  //회원가입 함수
  const handleJoin = () => {
    joinMutation.mutate(joinForm);
  };

  const openJoinDialog = () => {
    openDialog({
      title: "회원가입 확인",
      content: "정말 이 정보로 회원가입하시겠습니까?",
      isCancelButton: true,
      onConfirmClick: handleJoin,
    });
  };

  //회원가입 인풋 체크
  const checkJoinAble = () => {
    const date = new Date();
    return (
      joinForm.isCheckedAccount &&
      joinForm.password &&
      joinForm.password === joinForm.confirmPassword &&
      joinForm.name &&
      joinForm.gender &&
      joinForm.birthYear &&
      date.getFullYear() - maxAge <= joinForm.birthYear &&
      joinForm.birthYear <= date.getFullYear() &&
      joinForm.email &&
      joinForm.phoneNumber
    );
  };

  return (
    <ContentContainer style={{ gap: 30 }}>
      <Text textStyle={TextStyle.bold}>회원가입</Text>
      <FlexLayout direction={FlexDirection.column} gap={30}>
        <FlexLayout direction={FlexDirection.row}>
          <Input
            fixWidth={inputFixWidth}
            maxLength={30}
            onChange={(e) => {
              setJoinForm((prevForm) => ({
                ...prevForm,
                account: e.target.value,
                isCheckedAccount: false,
              }));
            }}
            placeholder="아이디 입력"
            title="ID"
            type="text"
            value={joinForm.account || ""}
          />
          <OutlinedButton
            isDisabled={!joinForm.account}
            onClick={handleCheckDuplicate}
          >
            중복확인
          </OutlinedButton>
        </FlexLayout>
        <Input
          fixWidth={inputFixWidth}
          maxLength={30}
          onChange={(e) => {
            handleJoinFormChange("password", e.target.value);
          }}
          placeholder="비밀번호 입력"
          title="비밀번호"
          type="password"
          value={joinForm.password || ""}
        />
        <Input
          fixWidth={inputFixWidth}
          maxLength={30}
          onChange={(e) => {
            handleJoinFormChange("confirmPassword", e.target.value);
          }}
          placeholder="비밀번호 재입력"
          title="비밀번호 확인"
          type="password"
          value={joinForm.confirmPassword || ""}
        />
        <Input
          fixWidth={inputFixWidth}
          maxLength={30}
          onChange={(e) => {
            handleJoinFormChange("name", e.target.value);
          }}
          placeholder="이름 입력"
          title="이름"
          type="text"
          value={joinForm.name || ""}
        />
        <FlexLayout
          direction={FlexDirection.row}
          align={FlexAlign.center}
          gap={25}
        >
          <Text>성별</Text>
          <FlexLayout direction={FlexDirection.row} gap={20}>
            <RadioButton
              isChecked={joinForm.gender === Gender.Male}
              onClick={() => {
                handleJoinFormChange(
                  "gender",
                  joinForm.gender === Gender.Male ? "" : Gender.Male,
                );
              }}
              title="남성"
            />
            <RadioButton
              isChecked={joinForm.gender === Gender.Female}
              onClick={() => {
                handleJoinFormChange(
                  "gender",
                  joinForm.gender === Gender.Female ? "" : Gender.Female,
                );
              }}
              title="여성"
            />
          </FlexLayout>
          <div></div>
        </FlexLayout>
        <Input
          fixWidth={inputFixWidth}
          maxLength={4}
          onChange={(e) => {
            handleJoinFormChange("birthYear", e.target.value);
          }}
          placeholder="생년 입력"
          title="생년"
          type="number"
          value={String(joinForm.birthYear) || ""}
        />
        <Input
          fixWidth={inputFixWidth}
          maxLength={30}
          onChange={(e) => {
            handleJoinFormChange("email", e.target.value);
          }}
          placeholder="이메일 입력"
          title="이메일"
          type="email"
          value={joinForm.email || ""}
        />
        <Input
          fixWidth={inputFixWidth}
          maxLength={11}
          onChange={(e) => {
            const input = e.target.value.replace(/\D/g, "");
            handleJoinFormChange("phoneNumber", input);
          }}
          placeholder="연락처 입력"
          title="연락처"
          type="tel"
          value={joinForm.phoneNumber || ""}
        />
      </FlexLayout>
      <Button isDisabled={!checkJoinAble()} onClick={openJoinDialog}>
        회원가입 완료
      </Button>
    </ContentContainer>
  );
};

export default Join;
