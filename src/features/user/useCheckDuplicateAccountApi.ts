import { checkDuplicateAccountApi } from "@/src/api/userApi";
import { CheckDuplicateAccountResponse } from "@/src/model/user/CheckDuplicateAccountResponse";
import { useMutation } from "@tanstack/react-query";

interface UseCheckDuplicateAccountApiProps {
  onSuccess?: (data: CheckDuplicateAccountResponse) => void;
  onError?: () => void;
}

export function useCheckDuplicateAccountApi({
  onSuccess,
  onError,
}: UseCheckDuplicateAccountApiProps = {}) {
  return useMutation<CheckDuplicateAccountResponse, Error, string>({
    mutationFn: checkDuplicateAccountApi,
    onSuccess,
    onError,
  });
}
