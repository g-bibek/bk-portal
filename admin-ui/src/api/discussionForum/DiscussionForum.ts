import { DiscussionThread } from "../discussionThread/DiscussionThread";
import { Group } from "../group/Group";

export type DiscussionForum = {
  createdAt: Date;
  discussionThreads?: Array<DiscussionThread>;
  group?: Array<Group>;
  id: string;
  updatedAt: Date;
};
