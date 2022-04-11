import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { EmpowermentHistoryListRelationFilter } from "../empowermentHistory/EmpowermentHistoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";

export type EmpowermentWhereInput = {
  authorizedTeachers?: UserListRelationFilter;
  empowermentHistories?: EmpowermentHistoryListRelationFilter;
  id?: StringFilter;
  isDeleted?: BooleanNullableFilter;
  name?: StringFilter;
  resource?: ResourceListRelationFilter;
};
