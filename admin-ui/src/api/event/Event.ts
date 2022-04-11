import { User } from "../user/User";
import { Resource } from "../resource/Resource";

export type Event = {
  approvedUsers?: Array<User>;
  createdAt: Date;
  description: string | null;
  disapprovedUsers?: Array<User>;
  endDate: Date | null;
  eventType?: "Sangha" | "Public";
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  isPublished: boolean;
  name: string | null;
  resources?: Array<Resource>;
  signedUpUsers?: Array<User>;
  startDate: Date | null;
  updatedAt: Date;
};
