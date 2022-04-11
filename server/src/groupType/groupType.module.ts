import { Module } from "@nestjs/common";
import { GroupTypeModuleBase } from "./base/groupType.module.base";
import { GroupTypeService } from "./groupType.service";
import { GroupTypeController } from "./groupType.controller";
import { GroupTypeResolver } from "./groupType.resolver";

@Module({
  imports: [GroupTypeModuleBase],
  controllers: [GroupTypeController],
  providers: [GroupTypeService, GroupTypeResolver],
  exports: [GroupTypeService],
})
export class GroupTypeModule {}
