import type { HealthDataForm } from "./HealthDataForm";

type NumericHealthDataKey = {
  [Key in keyof HealthDataForm]-?: HealthDataForm[Key] extends
    | number
    | undefined
    ? Key
    : never;
}[keyof HealthDataForm];

export interface DataInputFieldModel {
  title: string;
  placeholder: string;
  key: NumericHealthDataKey;
  unit?: string;
}
