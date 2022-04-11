import { DiscussionThreadUpdateManyWithoutDiscussionThreadsInput } from "./DiscussionThreadUpdateManyWithoutDiscussionThreadsInput";
import { DiscussionForumWhereUniqueInput } from "../discussionForum/DiscussionForumWhereUniqueInput";
import { DiscussionThreadWhereUniqueInput } from "./DiscussionThreadWhereUniqueInput";

export type DiscussionThreadUpdateInput = {
  childDiscussionThreads?: DiscussionThreadUpdateManyWithoutDiscussionThreadsInput;
  comment?: string | null;
  discussionForum?: DiscussionForumWhereUniqueInput | null;
  parentThread?: DiscussionThreadWhereUniqueInput | null;
};
