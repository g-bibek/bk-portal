import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MahakramaHistoryService } from "./mahakramaHistory.service";
import { MahakramaHistoryControllerBase } from "./base/mahakramaHistory.controller.base";

@swagger.ApiTags("mahakramaHistories")
@common.Controller("mahakramaHistories")
export class MahakramaHistoryController extends MahakramaHistoryControllerBase {
  constructor(
    protected readonly service: MahakramaHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
