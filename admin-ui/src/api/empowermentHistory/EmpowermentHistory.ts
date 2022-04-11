import { Empowerment } from "../empowerment/Empowerment";
import { User } from "../user/User";

export type EmpowermentHistory = {
  createdAt: Date;
  empowerment?: Empowerment | null;
  id: string;
  isDeleted: boolean | null;
  updatedAt: Date;
  User?: User | null;
};
