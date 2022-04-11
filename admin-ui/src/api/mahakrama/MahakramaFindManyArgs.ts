import { MahakramaWhereInput } from "./MahakramaWhereInput";
import { MahakramaOrderByInput } from "./MahakramaOrderByInput";

export type MahakramaFindManyArgs = {
  where?: MahakramaWhereInput;
  orderBy?: Array<MahakramaOrderByInput>;
  skip?: number;
  take?: number;
};
