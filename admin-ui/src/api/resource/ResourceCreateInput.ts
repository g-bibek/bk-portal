import { ResourceCreateNestedManyWithoutResourcesInput } from "./ResourceCreateNestedManyWithoutResourcesInput";
import { EmpowermentCreateNestedManyWithoutResourcesInput } from "./EmpowermentCreateNestedManyWithoutResourcesInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { GroupCreateNestedManyWithoutResourcesInput } from "./GroupCreateNestedManyWithoutResourcesInput";
import { MahakramaCreateNestedManyWithoutResourcesInput } from "./MahakramaCreateNestedManyWithoutResourcesInput";
import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";

export type ResourceCreateInput = {
  childResources?: ResourceCreateNestedManyWithoutResourcesInput;
  empowerments?: EmpowermentCreateNestedManyWithoutResourcesInput;
  event?: EventWhereUniqueInput | null;
  groups?: GroupCreateNestedManyWithoutResourcesInput;
  mahakramas?: MahakramaCreateNestedManyWithoutResourcesInput;
  name: string;
  parentResource?: ResourceWhereUniqueInput | null;
  resourceType?: "Image" | "Youtube" | "Document" | "Link" | "Folder" | null;
};
