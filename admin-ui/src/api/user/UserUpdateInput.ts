import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { EmpowermentUpdateManyWithoutUsersInput } from "./EmpowermentUpdateManyWithoutUsersInput";
import { EmpowermentHistoryUpdateManyWithoutUsersInput } from "./EmpowermentHistoryUpdateManyWithoutUsersInput";
import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";
import { MahakramaHistoryUpdateManyWithoutUsersInput } from "./MahakramaHistoryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  approvedEvents?: EventUpdateManyWithoutUsersInput;
  authorizedEmpowerments?: EmpowermentUpdateManyWithoutUsersInput;
  Avatar?: string | null;
  disapprovedEvents?: EventUpdateManyWithoutUsersInput;
  email?: string;
  empowermentHistory?: EmpowermentHistoryUpdateManyWithoutUsersInput;
  firstName?: string | null;
  group?: GroupUpdateManyWithoutUsersInput;
  lastName?: string | null;
  mahakramaHistory?: MahakramaHistoryUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  signedUpEvents?: EventUpdateManyWithoutUsersInput;
  username?: string;
};
