import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiscussionThreadService } from "./discussionThread.service";
import { DiscussionThreadControllerBase } from "./base/discussionThread.controller.base";

@swagger.ApiTags("discussionThreads")
@common.Controller("discussionThreads")
export class DiscussionThreadController extends DiscussionThreadControllerBase {
  constructor(
    protected readonly service: DiscussionThreadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
