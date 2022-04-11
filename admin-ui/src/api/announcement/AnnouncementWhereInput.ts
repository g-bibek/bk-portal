import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AnnouncementWhereInput = {
  description?: StringNullableFilter;
  groups?: GroupListRelationFilter;
  id?: StringFilter;
  isDeleted?: BooleanNullableFilter;
  name?: StringFilter;
};
