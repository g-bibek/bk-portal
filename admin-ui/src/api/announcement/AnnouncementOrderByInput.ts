import { SortOrder } from "../../util/SortOrder";

export type AnnouncementOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
