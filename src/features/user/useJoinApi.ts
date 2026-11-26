import { joinApi } from "@/src/api/userApi";
import { JoinForm } from "@/src/model/user/JoinForm";
import { useMutation } from "@tanstack/react-query";

interface UseJoinApiProps {
  onSuccess?: () => void;
  onError?: () => void;
}

export function useJoinApi({ onSuccess, onError }: UseJoinApiProps = {}) {
  return useMutation<unknown, Error, JoinForm>({
    mutationFn: joinApi,
    onSuccess,
    onError,
  });
}
