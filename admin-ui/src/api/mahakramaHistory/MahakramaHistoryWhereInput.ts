import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MahakramaListRelationFilter } from "../mahakrama/MahakramaListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MahakramaHistoryWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanNullableFilter;
  mahakrama?: MahakramaListRelationFilter;
  isMarkedCompleteByInstructor?: BooleanNullableFilter;
  isMarkedCompleteByStudent?: BooleanNullableFilter;
  student?: UserWhereUniqueInput;
};
