import { SortOrder } from "../../util/SortOrder";

export type DiscussionThreadOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  discussionForumId?: SortOrder;
  id?: SortOrder;
  parentThreadId?: SortOrder;
  updatedAt?: SortOrder;
};
