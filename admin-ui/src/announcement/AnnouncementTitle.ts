import { Announcement as TAnnouncement } from "../api/announcement/Announcement";

export const ANNOUNCEMENT_TITLE_FIELD = "name";

export const AnnouncementTitle = (record: TAnnouncement): string => {
  return record.name || record.id;
};
