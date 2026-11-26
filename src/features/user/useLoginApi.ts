import { loginApi } from "@/src/api/userApi";
import { LoginForm } from "@/src/model/user/LoginForm";
import { LoginResponse } from "@/src/model/user/LoginResponse";
import { userInfoKey } from "@/src/utils/utils";
import { useMutation } from "@tanstack/react-query";

interface UseLoginApiProps {
  onSuccess?: () => void;
  onError?: () => void;
}

const processLogin = (info: LoginResponse) => {
  localStorage.setItem(
    userInfoKey,
    JSON.stringify({
      info,
    }),
  );
};

export function useLoginApi({ onSuccess, onError }: UseLoginApiProps = {}) {
  return useMutation<LoginResponse, Error, LoginForm>({
    mutationFn: loginApi,
    onSuccess: (data: LoginResponse) => {
      if (data.success) {
        processLogin({
          ...data.user,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });
        onSuccess?.();
      } else {
        onError?.();
      }
    },
    onError,
  });
}
