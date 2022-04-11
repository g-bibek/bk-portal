import { Module } from "@nestjs/common";
import { MahakramaHistoryModuleBase } from "./base/mahakramaHistory.module.base";
import { MahakramaHistoryService } from "./mahakramaHistory.service";
import { MahakramaHistoryController } from "./mahakramaHistory.controller";
import { MahakramaHistoryResolver } from "./mahakramaHistory.resolver";

@Module({
  imports: [MahakramaHistoryModuleBase],
  controllers: [MahakramaHistoryController],
  providers: [MahakramaHistoryService, MahakramaHistoryResolver],
  exports: [MahakramaHistoryService],
})
export class MahakramaHistoryModule {}
