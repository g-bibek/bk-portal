import { Group } from "../group/Group";

export type Announcement = {
  createdAt: Date;
  description: string | null;
  groups?: Array<Group>;
  id: string;
  isDeleted: boolean | null;
  name: string;
  updatedAt: Date;
};
