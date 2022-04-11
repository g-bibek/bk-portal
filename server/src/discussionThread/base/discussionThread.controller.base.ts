/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DiscussionThreadService } from "../discussionThread.service";
import { DiscussionThreadCreateInput } from "./DiscussionThreadCreateInput";
import { DiscussionThreadWhereInput } from "./DiscussionThreadWhereInput";
import { DiscussionThreadWhereUniqueInput } from "./DiscussionThreadWhereUniqueInput";
import { DiscussionThreadFindManyArgs } from "./DiscussionThreadFindManyArgs";
import { DiscussionThreadUpdateInput } from "./DiscussionThreadUpdateInput";
import { DiscussionThread } from "./DiscussionThread";
@swagger.ApiBearerAuth()
export class DiscussionThreadControllerBase {
  constructor(
    protected readonly service: DiscussionThreadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "DiscussionThread",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: DiscussionThread })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: DiscussionThreadCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<DiscussionThread> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "DiscussionThread",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"DiscussionThread"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        discussionForum: data.discussionForum
          ? {
              connect: data.discussionForum,
            }
          : undefined,

        parentThread: data.parentThread
          ? {
              connect: data.parentThread,
            }
          : undefined,
      },
      select: {
        comment: true,
        createdAt: true,

        discussionForum: {
          select: {
            id: true,
          },
        },

        id: true,

        parentThread: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "DiscussionThread",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [DiscussionThread] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(DiscussionThreadFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<DiscussionThread[]> {
    const args = plainToClass(DiscussionThreadFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "DiscussionThread",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        comment: true,
        createdAt: true,

        discussionForum: {
          select: {
            id: true,
          },
        },

        id: true,

        parentThread: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "DiscussionThread",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: DiscussionThread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DiscussionThreadWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<DiscussionThread | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "DiscussionThread",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        comment: true,
        createdAt: true,

        discussionForum: {
          select: {
            id: true,
          },
        },

        id: true,

        parentThread: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "DiscussionThread",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: DiscussionThread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DiscussionThreadWhereUniqueInput,
    @common.Body()
    data: DiscussionThreadUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<DiscussionThread | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "DiscussionThread",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"DiscussionThread"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          discussionForum: data.discussionForum
            ? {
                connect: data.discussionForum,
              }
            : undefined,

          parentThread: data.parentThread
            ? {
                connect: data.parentThread,
              }
            : undefined,
        },
        select: {
          comment: true,
          createdAt: true,

          discussionForum: {
            select: {
              id: true,
            },
          },

          id: true,

          parentThread: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "DiscussionThread",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: DiscussionThread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DiscussionThreadWhereUniqueInput
  ): Promise<DiscussionThread | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          comment: true,
          createdAt: true,

          discussionForum: {
            select: {
              id: true,
            },
          },

          id: true,

          parentThread: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/childDiscussionThreads")
  @nestAccessControl.UseRoles({
    resource: "DiscussionThread",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(DiscussionThreadFindManyArgs)
  async findManyChildDiscussionThreads(
    @common.Req() request: Request,
    @common.Param() params: DiscussionThreadWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<DiscussionThread[]> {
    const query = plainToClass(DiscussionThreadFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "DiscussionThread",
    });
    const results = await this.service.findChildDiscussionThreads(params.id, {
      ...query,
      select: {
        comment: true,
        createdAt: true,

        discussionForum: {
          select: {
            id: true,
          },
        },

        id: true,

        parentThread: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/childDiscussionThreads")
  @nestAccessControl.UseRoles({
    resource: "DiscussionThread",
    action: "update",
    possession: "any",
  })
  async createChildDiscussionThreads(
    @common.Param() params: DiscussionThreadWhereUniqueInput,
    @common.Body() body: DiscussionThreadWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      childDiscussionThreads: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "DiscussionThread",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"DiscussionThread"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/childDiscussionThreads")
  @nestAccessControl.UseRoles({
    resource: "DiscussionThread",
    action: "update",
    possession: "any",
  })
  async updateChildDiscussionThreads(
    @common.Param() params: DiscussionThreadWhereUniqueInput,
    @common.Body() body: DiscussionThreadWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      childDiscussionThreads: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "DiscussionThread",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"DiscussionThread"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/childDiscussionThreads")
  @nestAccessControl.UseRoles({
    resource: "DiscussionThread",
    action: "update",
    possession: "any",
  })
  async deleteChildDiscussionThreads(
    @common.Param() params: DiscussionThreadWhereUniqueInput,
    @common.Body() body: DiscussionThreadWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      childDiscussionThreads: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "DiscussionThread",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"DiscussionThread"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
