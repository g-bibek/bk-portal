import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MahakramaHistoryResolverBase } from "./base/mahakramaHistory.resolver.base";
import { MahakramaHistory } from "./base/MahakramaHistory";
import { MahakramaHistoryService } from "./mahakramaHistory.service";

@graphql.Resolver(() => MahakramaHistory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MahakramaHistoryResolver extends MahakramaHistoryResolverBase {
  constructor(
    protected readonly service: MahakramaHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
