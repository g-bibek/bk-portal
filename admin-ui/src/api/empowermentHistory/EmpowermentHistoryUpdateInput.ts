import { EmpowermentWhereUniqueInput } from "../empowerment/EmpowermentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { User } from "../user/User";

export type EmpowermentHistoryUpdateInput = {
  empowerment?: EmpowermentWhereUniqueInput | null;
  isDeleted?: boolean | null;
  User?: UserWhereUniqueInput | null;
};
