import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentResourceId?: SortOrder;
  resourceType?: SortOrder;
  updatedAt?: SortOrder;
};
