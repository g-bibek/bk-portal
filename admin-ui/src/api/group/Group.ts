import { User } from "../user/User";

export type Group = {
  createdAt: Date;
  details: string | null;
  groupType?: "System" | "Default";
  id: string;
  name: string;
  updatedAt: Date;
  users?: Array<User>;
};
