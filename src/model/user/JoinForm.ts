import { Gender } from "@/src/enums/Gender";

export class JoinForm {
  account?: string;
  password?: string;
  name?: string;
  gender?: Gender;
  birthYear?: number;
  email?: string;
  phoneNumber?: string;
}
