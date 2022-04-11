import { Event } from "../event/Event";
import { Empowerment } from "../empowerment/Empowerment";
import { EmpowermentHistory } from "../empowermentHistory/EmpowermentHistory";
import { Group } from "../group/Group";
import { MahakramaHistory } from "../mahakramaHistory/MahakramaHistory";

export type User = {
  approvedEvents?: Array<Event>;
  authorizedEmpowerments?: Array<Empowerment>;
  Avatar: string | null;
  createdAt: Date;
  disapprovedEvents?: Array<Event>;
  email: string;
  empowermentHistory?: Array<EmpowermentHistory>;
  firstName: string | null;
  group?: Array<Group>;
  id: string;
  lastName: string | null;
  mahakramaHistory?: Array<MahakramaHistory>;
  roles: Array<string>;
  signedUpEvents?: Array<Event>;
  updatedAt: Date;
  username: string;
};
