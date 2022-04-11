/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateAnnouncementArgs } from "./CreateAnnouncementArgs";
import { UpdateAnnouncementArgs } from "./UpdateAnnouncementArgs";
import { DeleteAnnouncementArgs } from "./DeleteAnnouncementArgs";
import { AnnouncementFindManyArgs } from "./AnnouncementFindManyArgs";
import { AnnouncementFindUniqueArgs } from "./AnnouncementFindUniqueArgs";
import { Announcement } from "./Announcement";
import { GroupFindManyArgs } from "../../group/base/GroupFindManyArgs";
import { Group } from "../../group/base/Group";
import { AnnouncementService } from "../announcement.service";

@graphql.Resolver(() => Announcement)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AnnouncementResolverBase {
  constructor(
    protected readonly service: AnnouncementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "read",
    possession: "any",
  })
  async _announcementsMeta(
    @graphql.Args() args: AnnouncementFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Announcement])
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "read",
    possession: "any",
  })
  async announcements(
    @graphql.Args() args: AnnouncementFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Announcement[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Announcement",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Announcement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "read",
    possession: "own",
  })
  async announcement(
    @graphql.Args() args: AnnouncementFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Announcement | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Announcement",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Announcement)
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "create",
    possession: "any",
  })
  async createAnnouncement(
    @graphql.Args() args: CreateAnnouncementArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Announcement> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Announcement",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Announcement"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Announcement)
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "update",
    possession: "any",
  })
  async updateAnnouncement(
    @graphql.Args() args: UpdateAnnouncementArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Announcement | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Announcement",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Announcement"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Announcement)
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "delete",
    possession: "any",
  })
  async deleteAnnouncement(
    @graphql.Args() args: DeleteAnnouncementArgs
  ): Promise<Announcement | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Group])
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "read",
    possession: "any",
  })
  async groups(
    @graphql.Parent() parent: Announcement,
    @graphql.Args() args: GroupFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Group[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Group",
    });
    const results = await this.service.findGroups(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}