import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DiscussionThreadResolverBase } from "./base/discussionThread.resolver.base";
import { DiscussionThread } from "./base/DiscussionThread";
import { DiscussionThreadService } from "./discussionThread.service";

@graphql.Resolver(() => DiscussionThread)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DiscussionThreadResolver extends DiscussionThreadResolverBase {
  constructor(
    protected readonly service: DiscussionThreadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
