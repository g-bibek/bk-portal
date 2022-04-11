import { DiscussionForum } from "../discussionForum/DiscussionForum";

export type DiscussionThread = {
  childDiscussionThreads?: Array<DiscussionThread>;
  comment: string | null;
  createdAt: Date;
  discussionForum?: DiscussionForum | null;
  id: string;
  parentThread?: DiscussionThread | null;
  updatedAt: Date;
};
