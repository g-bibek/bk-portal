import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AnnouncementResolverBase } from "./base/announcement.resolver.base";
import { Announcement } from "./base/Announcement";
import { AnnouncementService } from "./announcement.service";

@graphql.Resolver(() => Announcement)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AnnouncementResolver extends AnnouncementResolverBase {
  constructor(
    protected readonly service: AnnouncementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
