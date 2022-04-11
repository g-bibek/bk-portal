import { ResourceListRelationFilter } from "./ResourceListRelationFilter";
import { EmpowermentListRelationFilter } from "../empowerment/EmpowermentListRelationFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MahakramaListRelationFilter } from "../mahakrama/MahakramaListRelationFilter";
import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";

export type ResourceWhereInput = {
  childResources?: ResourceListRelationFilter;
  empowerments?: EmpowermentListRelationFilter;
  event?: EventWhereUniqueInput;
  groups?: GroupListRelationFilter;
  id?: StringFilter;
  mahakramas?: MahakramaListRelationFilter;
  name?: StringFilter;
  parentResource?: ResourceWhereUniqueInput;
  resourceType?: "Image" | "Youtube" | "Document" | "Link" | "Folder";
};
