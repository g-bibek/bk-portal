import { Mahakrama } from "../mahakrama/Mahakrama";
import { User } from "../user/User";

export type MahakramaHistory = {
  comment: string | null;
  createdAt: Date;
  id: string;
  isDeleted: boolean | null;
  mahakrama?: Array<Mahakrama>;
  isMarkedCompleteByInstructor: boolean | null;
  isMarkedCompleteByStudent: boolean | null;
  student?: User;
  updatedAt: Date;
};
