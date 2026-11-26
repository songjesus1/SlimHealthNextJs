import { saveHealthDataApi } from "@/src/api/healthDataApi";
import { HealthDataForm } from "@/src/model/health/HealthDataForm";
import { SaveHealthDataApiResponse } from "@/src/model/health/SaveHealthDataApiResponse";
import { useMutation } from "@tanstack/react-query";

interface UseSaveHealthDataApiProps {
  onSuccess?: (data: SaveHealthDataApiResponse) => void;
  onError?: () => void;
}

export function useSaveHealthDataApi({
  onSuccess,
  onError,
}: UseSaveHealthDataApiProps = {}) {
  return useMutation<SaveHealthDataApiResponse, Error, HealthDataForm>({
    mutationFn: saveHealthDataApi,
    onSuccess,
    onError,
  });
}
