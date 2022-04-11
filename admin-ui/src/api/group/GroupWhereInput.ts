import { AnnouncementWhereUniqueInput } from "../announcement/AnnouncementWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscussionForumListRelationFilter } from "../discussionForum/DiscussionForumListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type GroupWhereInput = {
  announcement?: AnnouncementWhereUniqueInput;
  details?: StringNullableFilter;
  discussionForums?: DiscussionForumListRelationFilter;
  groupType?: "System" | "Default";
  id?: StringFilter;
  name?: StringFilter;
  resources?: ResourceListRelationFilter;
  users?: UserListRelationFilter;
};
