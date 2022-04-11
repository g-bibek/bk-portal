import { DiscussionThreadListRelationFilter } from "./DiscussionThreadListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscussionForumWhereUniqueInput } from "../discussionForum/DiscussionForumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DiscussionThreadWhereUniqueInput } from "./DiscussionThreadWhereUniqueInput";

export type DiscussionThreadWhereInput = {
  childDiscussionThreads?: DiscussionThreadListRelationFilter;
  comment?: StringNullableFilter;
  discussionForum?: DiscussionForumWhereUniqueInput;
  id?: StringFilter;
  parentThread?: DiscussionThreadWhereUniqueInput;
};
