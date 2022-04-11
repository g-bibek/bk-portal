import { GroupUpdateManyWithoutAnnouncementsInput } from "./GroupUpdateManyWithoutAnnouncementsInput";

export type AnnouncementUpdateInput = {
  description?: string | null;
  groups?: GroupUpdateManyWithoutAnnouncementsInput;
  isDeleted?: boolean | null;
  name?: string;
};
