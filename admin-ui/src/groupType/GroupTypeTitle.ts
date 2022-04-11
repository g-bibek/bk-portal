import { GroupType as TGroupType } from "../api/groupType/GroupType";

export const GROUPTYPE_TITLE_FIELD = "name";

export const GroupTypeTitle = (record: TGroupType): string => {
  return record.name || record.id;
};
