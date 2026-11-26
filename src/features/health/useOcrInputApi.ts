import { ocrInputApi } from "@/src/api/healthDataApi";
import { OcrInputApiResponse } from "@/src/model/health/OcrInputApiResponse";
import { useMutation } from "@tanstack/react-query";

interface UseOcrInputApiProps {
  onSuccess?: (data: OcrInputApiResponse) => void;
  onError?: () => void;
}

export function useOcrInputApi({
  onSuccess,
  onError,
}: UseOcrInputApiProps = {}) {
  return useMutation<OcrInputApiResponse, Error, File[]>({
    mutationFn: ocrInputApi,
    onSuccess,
    onError,
  });
}
