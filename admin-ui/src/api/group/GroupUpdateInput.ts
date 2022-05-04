import { UserUpdateManyWithoutGroupsInput } from "./UserUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  details?: string | null;
  groupType?: "System" | "Default";
  name?: string;
  users?: UserUpdateManyWithoutGroupsInput;
};
