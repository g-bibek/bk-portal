import { DiscussionThreadCreateNestedManyWithoutDiscussionForumsInput } from "./DiscussionThreadCreateNestedManyWithoutDiscussionForumsInput";
import { GroupCreateNestedManyWithoutDiscussionForumsInput } from "./GroupCreateNestedManyWithoutDiscussionForumsInput";

export type DiscussionForumCreateInput = {
  discussionThreads?: DiscussionThreadCreateNestedManyWithoutDiscussionForumsInput;
  group?: GroupCreateNestedManyWithoutDiscussionForumsInput;
};
