import { DiscussionThreadWhereInput } from "./DiscussionThreadWhereInput";
import { DiscussionThreadOrderByInput } from "./DiscussionThreadOrderByInput";

export type DiscussionThreadFindManyArgs = {
  where?: DiscussionThreadWhereInput;
  orderBy?: Array<DiscussionThreadOrderByInput>;
  skip?: number;
  take?: number;
};
