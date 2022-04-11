import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmpowermentHistoryService } from "./empowermentHistory.service";
import { EmpowermentHistoryControllerBase } from "./base/empowermentHistory.controller.base";

@swagger.ApiTags("empowermentHistories")
@common.Controller("empowermentHistories")
export class EmpowermentHistoryController extends EmpowermentHistoryControllerBase {
  constructor(
    protected readonly service: EmpowermentHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
