import { Empowerment as TEmpowerment } from "../api/empowerment/Empowerment";

export const EMPOWERMENT_TITLE_FIELD = "name";

export const EmpowermentTitle = (record: TEmpowerment): string => {
  return record.name || record.id;
};
