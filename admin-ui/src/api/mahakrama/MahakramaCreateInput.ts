import { MahakramaHistoryCreateNestedManyWithoutMahakramasInput } from "./MahakramaHistoryCreateNestedManyWithoutMahakramasInput";
import { ResourceCreateNestedManyWithoutMahakramasInput } from "./ResourceCreateNestedManyWithoutMahakramasInput";

export type MahakramaCreateInput = {
  mahakramaHistories?: MahakramaHistoryCreateNestedManyWithoutMahakramasInput;
  name: string;
  resource?: ResourceCreateNestedManyWithoutMahakramasInput;
  stepNumber: string;
};
