import { Empowerment } from "../empowerment/Empowerment";
import { Event } from "../event/Event";
import { Group } from "../group/Group";
import { Mahakrama } from "../mahakrama/Mahakrama";

export type Resource = {
  childResources?: Array<Resource>;
  createdAt: Date;
  empowerments?: Array<Empowerment>;
  event?: Event | null;
  groups?: Array<Group>;
  id: string;
  mahakramas?: Array<Mahakrama>;
  name: string;
  parentResource?: Resource | null;
  resourceType?: "Image" | "Youtube" | "Document" | "Link" | "Folder" | null;
  updatedAt: Date;
};
