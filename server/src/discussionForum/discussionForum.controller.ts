import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiscussionForumService } from "./discussionForum.service";
import { DiscussionForumControllerBase } from "./base/discussionForum.controller.base";

@swagger.ApiTags("discussionForums")
@common.Controller("discussionForums")
export class DiscussionForumController extends DiscussionForumControllerBase {
  constructor(
    protected readonly service: DiscussionForumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
