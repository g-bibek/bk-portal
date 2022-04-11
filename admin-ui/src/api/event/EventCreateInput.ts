import { UserCreateNestedManyWithoutEventsInput } from "./UserCreateNestedManyWithoutEventsInput";
import { ResourceCreateNestedManyWithoutEventsInput } from "./ResourceCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  approvedUsers?: UserCreateNestedManyWithoutEventsInput;
  description?: string | null;
  disapprovedUsers?: UserCreateNestedManyWithoutEventsInput;
  endDate?: Date | null;
  eventType: "Sangha" | "Public";
  isActive: boolean;
  isDeleted: boolean;
  isPublished: boolean;
  name?: string | null;
  resources?: ResourceCreateNestedManyWithoutEventsInput;
  signedUpUsers?: UserCreateNestedManyWithoutEventsInput;
  startDate?: Date | null;
};
