import { DiscussionThreadListRelationFilter } from "../discussionThread/DiscussionThreadListRelationFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DiscussionForumWhereInput = {
  discussionThreads?: DiscussionThreadListRelationFilter;
  group?: GroupListRelationFilter;
  id?: StringFilter;
};
