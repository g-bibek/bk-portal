import { GroupTypeWhereInput } from "./GroupTypeWhereInput";
import { GroupTypeOrderByInput } from "./GroupTypeOrderByInput";

export type GroupTypeFindManyArgs = {
  where?: GroupTypeWhereInput;
  orderBy?: Array<GroupTypeOrderByInput>;
  skip?: number;
  take?: number;
};
