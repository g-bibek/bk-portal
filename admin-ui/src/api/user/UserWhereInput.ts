import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { EmpowermentListRelationFilter } from "../empowerment/EmpowermentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EmpowermentHistoryListRelationFilter } from "../empowermentHistory/EmpowermentHistoryListRelationFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { MahakramaHistoryListRelationFilter } from "../mahakramaHistory/MahakramaHistoryListRelationFilter";

export type UserWhereInput = {
  approvedEvents?: EventListRelationFilter;
  authorizedEmpowerments?: EmpowermentListRelationFilter;
  Avatar?: StringNullableFilter;
  disapprovedEvents?: EventListRelationFilter;
  email?: StringFilter;
  empowermentHistory?: EmpowermentHistoryListRelationFilter;
  firstName?: StringNullableFilter;
  group?: GroupListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mahakramaHistory?: MahakramaHistoryListRelationFilter;
  signedUpEvents?: EventListRelationFilter;
  username?: StringFilter;
};
