import { EmpowermentWhereUniqueInput } from "../empowerment/EmpowermentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { User } from "../user/User";

export type EmpowermentHistoryWhereInput = {
  empowerment?: EmpowermentWhereUniqueInput;
  id?: StringFilter;
  isDeleted?: BooleanNullableFilter;
  User?: UserWhereUniqueInput;
};
