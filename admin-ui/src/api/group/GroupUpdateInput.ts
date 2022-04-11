import { AnnouncementWhereUniqueInput } from "../announcement/AnnouncementWhereUniqueInput";
import { DiscussionForumUpdateManyWithoutGroupsInput } from "./DiscussionForumUpdateManyWithoutGroupsInput";
import { ResourceUpdateManyWithoutGroupsInput } from "./ResourceUpdateManyWithoutGroupsInput";
import { UserUpdateManyWithoutGroupsInput } from "./UserUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  announcement?: AnnouncementWhereUniqueInput | null;
  details?: string | null;
  discussionForums?: DiscussionForumUpdateManyWithoutGroupsInput;
  groupType?: "System" | "Default";
  name?: string;
  resources?: ResourceUpdateManyWithoutGroupsInput;
  users?: UserUpdateManyWithoutGroupsInput;
};
