import { AnnouncementWhereUniqueInput } from "../announcement/AnnouncementWhereUniqueInput";
import { DiscussionForumCreateNestedManyWithoutGroupsInput } from "./DiscussionForumCreateNestedManyWithoutGroupsInput";
import { ResourceCreateNestedManyWithoutGroupsInput } from "./ResourceCreateNestedManyWithoutGroupsInput";
import { UserCreateNestedManyWithoutGroupsInput } from "./UserCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  announcement?: AnnouncementWhereUniqueInput | null;
  details?: string | null;
  discussionForums?: DiscussionForumCreateNestedManyWithoutGroupsInput;
  groupType: "System" | "Default";
  name: string;
  resources?: ResourceCreateNestedManyWithoutGroupsInput;
  users?: UserCreateNestedManyWithoutGroupsInput;
};
