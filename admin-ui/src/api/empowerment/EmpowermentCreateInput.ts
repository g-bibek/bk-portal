import { UserCreateNestedManyWithoutEmpowermentsInput } from "./UserCreateNestedManyWithoutEmpowermentsInput";
import { EmpowermentHistoryCreateNestedManyWithoutEmpowermentsInput } from "./EmpowermentHistoryCreateNestedManyWithoutEmpowermentsInput";
import { ResourceCreateNestedManyWithoutEmpowermentsInput } from "./ResourceCreateNestedManyWithoutEmpowermentsInput";

export type EmpowermentCreateInput = {
  authorizedTeachers?: UserCreateNestedManyWithoutEmpowermentsInput;
  empowermentHistories?: EmpowermentHistoryCreateNestedManyWithoutEmpowermentsInput;
  isDeleted?: boolean | null;
  name: string;
  resource?: ResourceCreateNestedManyWithoutEmpowermentsInput;
};
