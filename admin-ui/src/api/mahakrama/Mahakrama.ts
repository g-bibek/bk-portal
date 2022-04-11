import { MahakramaHistory } from "../mahakramaHistory/MahakramaHistory";
import { Resource } from "../resource/Resource";

export type Mahakrama = {
  createdAt: Date;
  id: string;
  mahakramaHistories?: Array<MahakramaHistory>;
  name: string;
  resource?: Array<Resource>;
  stepNumber: string;
  updatedAt: Date;
};
