import { MahakramaCreateNestedManyWithoutMahakramaHistoriesInput } from "./MahakramaCreateNestedManyWithoutMahakramaHistoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MahakramaHistoryCreateInput = {
  comment?: string | null;
  isDeleted?: boolean | null;
  mahakrama?: MahakramaCreateNestedManyWithoutMahakramaHistoriesInput;
  isMarkedCompleteByInstructor?: boolean | null;
  isMarkedCompleteByStudent?: boolean | null;
  student: UserWhereUniqueInput;
};
