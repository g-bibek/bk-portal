import { UserUpdateManyWithoutEmpowermentsInput } from "./UserUpdateManyWithoutEmpowermentsInput";
import { EmpowermentHistoryUpdateManyWithoutEmpowermentsInput } from "./EmpowermentHistoryUpdateManyWithoutEmpowermentsInput";
import { ResourceUpdateManyWithoutEmpowermentsInput } from "./ResourceUpdateManyWithoutEmpowermentsInput";

export type EmpowermentUpdateInput = {
  authorizedTeachers?: UserUpdateManyWithoutEmpowermentsInput;
  empowermentHistories?: EmpowermentHistoryUpdateManyWithoutEmpowermentsInput;
  isDeleted?: boolean | null;
  name?: string;
  resource?: ResourceUpdateManyWithoutEmpowermentsInput;
};
