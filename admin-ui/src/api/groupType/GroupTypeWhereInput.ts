import { StringFilter } from "../../util/StringFilter";

export type GroupTypeWhereInput = {
  id?: StringFilter;
  name?: "System" | "Regular";
};
