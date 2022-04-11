import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DiscussionThreadServiceBase } from "./base/discussionThread.service.base";

@Injectable()
export class DiscussionThreadService extends DiscussionThreadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
