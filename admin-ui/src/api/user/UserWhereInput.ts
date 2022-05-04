import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";

export type UserWhereInput = {
  Avatar?: StringNullableFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  group?: GroupListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
