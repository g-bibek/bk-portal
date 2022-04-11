import { MahakramaHistory as TMahakramaHistory } from "../api/mahakramaHistory/MahakramaHistory";

export const MAHAKRAMAHISTORY_TITLE_FIELD = "id";

export const MahakramaHistoryTitle = (record: TMahakramaHistory): string => {
  return record.id || record.id;
};
