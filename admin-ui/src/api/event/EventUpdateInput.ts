import { UserUpdateManyWithoutEventsInput } from "./UserUpdateManyWithoutEventsInput";
import { ResourceUpdateManyWithoutEventsInput } from "./ResourceUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  approvedUsers?: UserUpdateManyWithoutEventsInput;
  description?: string | null;
  disapprovedUsers?: UserUpdateManyWithoutEventsInput;
  endDate?: Date | null;
  eventType?: "Sangha" | "Public";
  isActive?: boolean;
  isDeleted?: boolean;
  isPublished?: boolean;
  name?: string | null;
  resources?: ResourceUpdateManyWithoutEventsInput;
  signedUpUsers?: UserUpdateManyWithoutEventsInput;
  startDate?: Date | null;
};
