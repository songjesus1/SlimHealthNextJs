"use client";
import { Button } from "@/src/components/Button/Button";
import { ContentContainer } from "@/src/components/ContentContainer/ContentContainer";
import { FlexDirection } from "@/src/components/FlexLayout/FlexDirection";
import { FlexLayout } from "@/src/components/FlexLayout/FlexLayout";
import { Input } from "@/src/components/Input/Input";
import { OutlinedButton } from "@/src/components/OutlinedButton/OutlinedButton";
import { Text } from "@/src/components/Text";
import { TextStyle } from "@/src/components/Text/TextStyle";
import Context from "@/src/context/context";
import { useLoginApi } from "@/src/features/user/useLoginApi";
import { ROUTES } from "@/src/utils/routeUtils";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const Login = () => {
  const router = useRouter();
  const { openDialog, closeDialog } = useContext(Context);

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLoginApi({
    onSuccess: () => {
      router.push(ROUTES.MAIN);
    },
    onError: () => {
      openDialog({
        title: "로그인 오류",
        content: "아이디 또는 비밀번호를 확인해주세요",
        isCancelButton: false,
        onConfirmClick: closeDialog,
      });
    },
  });

  const handleLogin = () => {
    loginMutation.mutate({ account, password });
  };

  return (
    <ContentContainer style={{ gap: 30 }}>
      <Text textStyle={TextStyle.bold}>로그인</Text>
      <Input
        fixWidth={30}
        maxLength={30}
        onChange={(e) => {
          setAccount(e.target.value);
        }}
        placeholder="아이디"
        title="ID"
        type="text"
        value={account}
      />
      <Input
        fixWidth={30}
        maxLength={30}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="비밀번호"
        title="PW"
        type="password"
        value={password}
      />
      <FlexLayout direction={FlexDirection.row}>
        <OutlinedButton
          onClick={() => {
            router.push(ROUTES.JOIN);
          }}
        >
          회원가입
        </OutlinedButton>
        <Button
          isDisabled={!(account && password) || loginMutation.isPending}
          onClick={handleLogin}
        >
          로그인
        </Button>
      </FlexLayout>
    </ContentContainer>
  );
};

export default Login;
