import { User } from "../user/User";
import { EmpowermentHistory } from "../empowermentHistory/EmpowermentHistory";
import { Resource } from "../resource/Resource";

export type Empowerment = {
  authorizedTeachers?: Array<User>;
  createdAt: Date;
  empowermentHistories?: Array<EmpowermentHistory>;
  id: string;
  isDeleted: boolean | null;
  name: string;
  resource?: Array<Resource>;
  updatedAt: Date;
};
