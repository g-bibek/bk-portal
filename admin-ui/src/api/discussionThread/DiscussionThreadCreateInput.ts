import { DiscussionThreadCreateNestedManyWithoutDiscussionThreadsInput } from "./DiscussionThreadCreateNestedManyWithoutDiscussionThreadsInput";
import { DiscussionForumWhereUniqueInput } from "../discussionForum/DiscussionForumWhereUniqueInput";
import { DiscussionThreadWhereUniqueInput } from "./DiscussionThreadWhereUniqueInput";

export type DiscussionThreadCreateInput = {
  childDiscussionThreads?: DiscussionThreadCreateNestedManyWithoutDiscussionThreadsInput;
  comment?: string | null;
  discussionForum?: DiscussionForumWhereUniqueInput | null;
  parentThread?: DiscussionThreadWhereUniqueInput | null;
};
