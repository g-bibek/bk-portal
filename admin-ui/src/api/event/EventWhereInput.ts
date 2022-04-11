import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";

export type EventWhereInput = {
  approvedUsers?: UserListRelationFilter;
  description?: StringNullableFilter;
  disapprovedUsers?: UserListRelationFilter;
  endDate?: DateTimeNullableFilter;
  eventType?: "Sangha" | "Public";
  id?: StringFilter;
  isActive?: BooleanFilter;
  isDeleted?: BooleanFilter;
  isPublished?: BooleanFilter;
  name?: StringNullableFilter;
  resources?: ResourceListRelationFilter;
  signedUpUsers?: UserListRelationFilter;
  startDate?: DateTimeNullableFilter;
};
