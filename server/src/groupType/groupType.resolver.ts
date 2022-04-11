import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GroupTypeResolverBase } from "./base/groupType.resolver.base";
import { GroupType } from "./base/GroupType";
import { GroupTypeService } from "./groupType.service";

@graphql.Resolver(() => GroupType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GroupTypeResolver extends GroupTypeResolverBase {
  constructor(
    protected readonly service: GroupTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
