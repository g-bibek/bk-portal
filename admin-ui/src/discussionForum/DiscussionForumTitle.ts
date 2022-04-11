import { DiscussionForum as TDiscussionForum } from "../api/discussionForum/DiscussionForum";

export const DISCUSSIONFORUM_TITLE_FIELD = "id";

export const DiscussionForumTitle = (record: TDiscussionForum): string => {
  return record.id || record.id;
};
