import { Announcement } from "../announcement/Announcement";
import { DiscussionForum } from "../discussionForum/DiscussionForum";
import { Resource } from "../resource/Resource";
import { User } from "../user/User";

export type Group = {
  announcement?: Announcement | null;
  createdAt: Date;
  details: string | null;
  discussionForums?: Array<DiscussionForum>;
  groupType?: "System" | "Default";
  id: string;
  name: string;
  resources?: Array<Resource>;
  updatedAt: Date;
  users?: Array<User>;
};
