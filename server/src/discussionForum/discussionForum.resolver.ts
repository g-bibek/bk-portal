import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DiscussionForumResolverBase } from "./base/discussionForum.resolver.base";
import { DiscussionForum } from "./base/DiscussionForum";
import { DiscussionForumService } from "./discussionForum.service";

@graphql.Resolver(() => DiscussionForum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DiscussionForumResolver extends DiscussionForumResolverBase {
  constructor(
    protected readonly service: DiscussionForumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
