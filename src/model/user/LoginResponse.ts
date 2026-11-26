import { UserInfo } from "./UserInfo";

export class LoginResponse {
  success?: boolean;
  accessToken?: string;
  refreshToken?: string;
  user?: UserInfo;
}
