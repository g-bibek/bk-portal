import { StringFilter } from "../../util/StringFilter";
import { MahakramaHistoryListRelationFilter } from "../mahakramaHistory/MahakramaHistoryListRelationFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";

export type MahakramaWhereInput = {
  id?: StringFilter;
  mahakramaHistories?: MahakramaHistoryListRelationFilter;
  name?: StringFilter;
  resource?: ResourceListRelationFilter;
  stepNumber?: StringFilter;
};
