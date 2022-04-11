import { EmpowermentWhereInput } from "./EmpowermentWhereInput";
import { EmpowermentOrderByInput } from "./EmpowermentOrderByInput";

export type EmpowermentFindManyArgs = {
  where?: EmpowermentWhereInput;
  orderBy?: Array<EmpowermentOrderByInput>;
  skip?: number;
  take?: number;
};
