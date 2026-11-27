import { HealthAdviceData } from "./HealthAdviceData";
import { HealthAdviceLifeStyleData } from "./HealthAdviceLifeStyleData";

export class HealthAdviceResponse {
  lifestyle_tips?: HealthAdviceLifeStyleData;
  advices?: HealthAdviceData[];
  total_advice?: string;
  risk_level?: string;
  overall_summary?: string;
  syndrome_count?: number;
  recommended_loss_kg?: number;
  recommended_reason?: string;
}
