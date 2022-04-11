import { EmpowermentHistory as TEmpowermentHistory } from "../api/empowermentHistory/EmpowermentHistory";

export const EMPOWERMENTHISTORY_TITLE_FIELD = "id";

export const EmpowermentHistoryTitle = (
  record: TEmpowermentHistory
): string => {
  return record.id || record.id;
};
