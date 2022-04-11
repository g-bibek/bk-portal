import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MahakramaService } from "./mahakrama.service";
import { MahakramaControllerBase } from "./base/mahakrama.controller.base";

@swagger.ApiTags("mahakramas")
@common.Controller("mahakramas")
export class MahakramaController extends MahakramaControllerBase {
  constructor(
    protected readonly service: MahakramaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
