import { DiscussionThreadUpdateManyWithoutDiscussionForumsInput } from "./DiscussionThreadUpdateManyWithoutDiscussionForumsInput";
import { GroupUpdateManyWithoutDiscussionForumsInput } from "./GroupUpdateManyWithoutDiscussionForumsInput";

export type DiscussionForumUpdateInput = {
  discussionThreads?: DiscussionThreadUpdateManyWithoutDiscussionForumsInput;
  group?: GroupUpdateManyWithoutDiscussionForumsInput;
};
