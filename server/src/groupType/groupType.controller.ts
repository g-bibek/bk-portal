import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GroupTypeService } from "./groupType.service";
import { GroupTypeControllerBase } from "./base/groupType.controller.base";

@swagger.ApiTags("groupTypes")
@common.Controller("groupTypes")
export class GroupTypeController extends GroupTypeControllerBase {
  constructor(
    protected readonly service: GroupTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
