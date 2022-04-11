import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EmpowermentResolverBase } from "./base/empowerment.resolver.base";
import { Empowerment } from "./base/Empowerment";
import { EmpowermentService } from "./empowerment.service";

@graphql.Resolver(() => Empowerment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmpowermentResolver extends EmpowermentResolverBase {
  constructor(
    protected readonly service: EmpowermentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
