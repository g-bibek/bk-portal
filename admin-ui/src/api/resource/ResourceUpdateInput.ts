import { ResourceUpdateManyWithoutResourcesInput } from "./ResourceUpdateManyWithoutResourcesInput";
import { EmpowermentUpdateManyWithoutResourcesInput } from "./EmpowermentUpdateManyWithoutResourcesInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { GroupUpdateManyWithoutResourcesInput } from "./GroupUpdateManyWithoutResourcesInput";
import { MahakramaUpdateManyWithoutResourcesInput } from "./MahakramaUpdateManyWithoutResourcesInput";
import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";

export type ResourceUpdateInput = {
  childResources?: ResourceUpdateManyWithoutResourcesInput;
  empowerments?: EmpowermentUpdateManyWithoutResourcesInput;
  event?: EventWhereUniqueInput | null;
  groups?: GroupUpdateManyWithoutResourcesInput;
  mahakramas?: MahakramaUpdateManyWithoutResourcesInput;
  name?: string;
  parentResource?: ResourceWhereUniqueInput | null;
  resourceType?: "Image" | "Youtube" | "Document" | "Link" | "Folder" | null;
};
