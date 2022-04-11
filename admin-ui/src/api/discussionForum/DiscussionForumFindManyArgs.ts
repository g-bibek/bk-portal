import { DiscussionForumWhereInput } from "./DiscussionForumWhereInput";
import { DiscussionForumOrderByInput } from "./DiscussionForumOrderByInput";

export type DiscussionForumFindManyArgs = {
  where?: DiscussionForumWhereInput;
  orderBy?: Array<DiscussionForumOrderByInput>;
  skip?: number;
  take?: number;
};
