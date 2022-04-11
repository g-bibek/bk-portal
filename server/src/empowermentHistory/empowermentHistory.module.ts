import { Module } from "@nestjs/common";
import { EmpowermentHistoryModuleBase } from "./base/empowermentHistory.module.base";
import { EmpowermentHistoryService } from "./empowermentHistory.service";
import { EmpowermentHistoryController } from "./empowermentHistory.controller";
import { EmpowermentHistoryResolver } from "./empowermentHistory.resolver";

@Module({
  imports: [EmpowermentHistoryModuleBase],
  controllers: [EmpowermentHistoryController],
  providers: [EmpowermentHistoryService, EmpowermentHistoryResolver],
  exports: [EmpowermentHistoryService],
})
export class EmpowermentHistoryModule {}
