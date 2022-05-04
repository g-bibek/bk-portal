import { UserCreateNestedManyWithoutGroupsInput } from "./UserCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  details?: string | null;
  groupType: "System" | "Default";
  name: string;
  users?: UserCreateNestedManyWithoutGroupsInput;
};
