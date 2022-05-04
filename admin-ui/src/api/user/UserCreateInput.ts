import { GroupCreateNestedManyWithoutUsersInput } from "./GroupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  Avatar?: string | null;
  email: string;
  firstName?: string | null;
  group?: GroupCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
