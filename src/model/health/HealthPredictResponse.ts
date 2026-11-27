import { HealthPredictionData } from "./HealthPredictionData";
import { HealthPredictPhysicalData } from "./HealthPredictPhysicalData";

export class HealthPredictResponse {
  physical?: HealthPredictPhysicalData;
  predictions?: HealthPredictionData[];
}
