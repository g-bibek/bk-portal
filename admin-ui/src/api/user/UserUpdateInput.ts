import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  Avatar?: string | null;
  email?: string;
  firstName?: string | null;
  group?: GroupUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
