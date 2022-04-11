import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GroupTypeServiceBase } from "./base/groupType.service.base";

@Injectable()
export class GroupTypeService extends GroupTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
