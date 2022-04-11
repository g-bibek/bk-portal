import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MahakramaResolverBase } from "./base/mahakrama.resolver.base";
import { Mahakrama } from "./base/Mahakrama";
import { MahakramaService } from "./mahakrama.service";

@graphql.Resolver(() => Mahakrama)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MahakramaResolver extends MahakramaResolverBase {
  constructor(
    protected readonly service: MahakramaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
