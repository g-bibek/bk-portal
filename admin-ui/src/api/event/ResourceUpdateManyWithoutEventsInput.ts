import { ResourceWhereUniqueInput } from "../resource/ResourceWhereUniqueInput";

export type ResourceUpdateManyWithoutEventsInput = {
  connect?: Array<ResourceWhereUniqueInput>;
  disconnect?: Array<ResourceWhereUniqueInput>;
  set?: Array<ResourceWhereUniqueInput>;
};
