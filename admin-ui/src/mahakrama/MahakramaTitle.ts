import { Mahakrama as TMahakrama } from "../api/mahakrama/Mahakrama";

export const MAHAKRAMA_TITLE_FIELD = "name";

export const MahakramaTitle = (record: TMahakrama): string => {
  return record.name || record.id;
};
