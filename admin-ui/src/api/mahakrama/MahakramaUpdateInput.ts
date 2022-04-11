import { MahakramaHistoryUpdateManyWithoutMahakramasInput } from "./MahakramaHistoryUpdateManyWithoutMahakramasInput";
import { ResourceUpdateManyWithoutMahakramasInput } from "./ResourceUpdateManyWithoutMahakramasInput";

export type MahakramaUpdateInput = {
  mahakramaHistories?: MahakramaHistoryUpdateManyWithoutMahakramasInput;
  name?: string;
  resource?: ResourceUpdateManyWithoutMahakramasInput;
  stepNumber?: string;
};
