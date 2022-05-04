import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type GroupWhereInput = {
  details?: StringNullableFilter;
  groupType?: "System" | "Default";
  id?: StringFilter;
  name?: StringFilter;
  users?: UserListRelationFilter;
};
