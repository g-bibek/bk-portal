import { Module } from "@nestjs/common";
import { EmpowermentModuleBase } from "./base/empowerment.module.base";
import { EmpowermentService } from "./empowerment.service";
import { EmpowermentController } from "./empowerment.controller";
import { EmpowermentResolver } from "./empowerment.resolver";

@Module({
  imports: [EmpowermentModuleBase],
  controllers: [EmpowermentController],
  providers: [EmpowermentService, EmpowermentResolver],
  exports: [EmpowermentService],
})
export class EmpowermentModule {}
