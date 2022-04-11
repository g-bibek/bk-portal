import { DiscussionThread as TDiscussionThread } from "../api/discussionThread/DiscussionThread";

export const DISCUSSIONTHREAD_TITLE_FIELD = "comment";

export const DiscussionThreadTitle = (record: TDiscussionThread): string => {
  return record.comment || record.id;
};
