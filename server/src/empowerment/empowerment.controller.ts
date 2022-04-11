import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmpowermentService } from "./empowerment.service";
import { EmpowermentControllerBase } from "./base/empowerment.controller.base";

@swagger.ApiTags("empowerments")
@common.Controller("empowerments")
export class EmpowermentController extends EmpowermentControllerBase {
  constructor(
    protected readonly service: EmpowermentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
