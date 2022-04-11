import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EmpowermentHistoryResolverBase } from "./base/empowermentHistory.resolver.base";
import { EmpowermentHistory } from "./base/EmpowermentHistory";
import { EmpowermentHistoryService } from "./empowermentHistory.service";

@graphql.Resolver(() => EmpowermentHistory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmpowermentHistoryResolver extends EmpowermentHistoryResolverBase {
  constructor(
    protected readonly service: EmpowermentHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
