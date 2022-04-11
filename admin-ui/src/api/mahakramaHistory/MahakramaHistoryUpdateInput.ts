import { MahakramaUpdateManyWithoutMahakramaHistoriesInput } from "./MahakramaUpdateManyWithoutMahakramaHistoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MahakramaHistoryUpdateInput = {
  comment?: string | null;
  isDeleted?: boolean | null;
  mahakrama?: MahakramaUpdateManyWithoutMahakramaHistoriesInput;
  isMarkedCompleteByInstructor?: boolean | null;
  isMarkedCompleteByStudent?: boolean | null;
  student?: UserWhereUniqueInput;
};
