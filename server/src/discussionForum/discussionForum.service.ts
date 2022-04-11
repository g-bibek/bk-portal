import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DiscussionForumServiceBase } from "./base/discussionForum.service.base";

@Injectable()
export class DiscussionForumService extends DiscussionForumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
