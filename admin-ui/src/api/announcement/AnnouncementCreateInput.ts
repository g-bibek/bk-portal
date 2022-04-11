import { GroupCreateNestedManyWithoutAnnouncementsInput } from "./GroupCreateNestedManyWithoutAnnouncementsInput";

export type AnnouncementCreateInput = {
  description?: string | null;
  groups?: GroupCreateNestedManyWithoutAnnouncementsInput;
  isDeleted?: boolean | null;
  name: string;
};
