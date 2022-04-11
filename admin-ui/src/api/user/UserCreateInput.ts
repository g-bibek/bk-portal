import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { EmpowermentCreateNestedManyWithoutUsersInput } from "./EmpowermentCreateNestedManyWithoutUsersInput";
import { EmpowermentHistoryCreateNestedManyWithoutUsersInput } from "./EmpowermentHistoryCreateNestedManyWithoutUsersInput";
import { GroupCreateNestedManyWithoutUsersInput } from "./GroupCreateNestedManyWithoutUsersInput";
import { MahakramaHistoryCreateNestedManyWithoutUsersInput } from "./MahakramaHistoryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  approvedEvents?: EventCreateNestedManyWithoutUsersInput;
  authorizedEmpowerments?: EmpowermentCreateNestedManyWithoutUsersInput;
  Avatar?: string | null;
  disapprovedEvents?: EventCreateNestedManyWithoutUsersInput;
  email: string;
  empowermentHistory?: EmpowermentHistoryCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  group?: GroupCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  mahakramaHistory?: MahakramaHistoryCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  signedUpEvents?: EventCreateNestedManyWithoutUsersInput;
  username: string;
};
