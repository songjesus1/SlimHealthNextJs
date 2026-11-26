import { Gender } from "@/src/enums/Gender";

export class JoinForm {
  isCheckedAccount?: boolean;
  account?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  gender?: Gender;
  birthYear?: number;
  email?: string;
  phoneNumber?: string;
}
