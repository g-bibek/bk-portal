import { EmpowermentHistoryWhereInput } from "./EmpowermentHistoryWhereInput";
import { EmpowermentHistoryOrderByInput } from "./EmpowermentHistoryOrderByInput";

export type EmpowermentHistoryFindManyArgs = {
  where?: EmpowermentHistoryWhereInput;
  orderBy?: Array<EmpowermentHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
