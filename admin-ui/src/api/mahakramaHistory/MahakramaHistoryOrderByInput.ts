import { SortOrder } from "../../util/SortOrder";

export type MahakramaHistoryOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  isMarkedCompleteByInstructor?: SortOrder;
  isMarkedCompleteByStudent?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
