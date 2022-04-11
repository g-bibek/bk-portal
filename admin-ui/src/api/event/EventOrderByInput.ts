import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDeleted?: SortOrder;
  isPublished?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
