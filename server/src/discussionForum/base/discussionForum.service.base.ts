/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  DiscussionForum,
  DiscussionThread,
  Group,
} from "@prisma/client";

export class DiscussionForumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DiscussionForumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumFindManyArgs>
  ): Promise<number> {
    return this.prisma.discussionForum.count(args);
  }

  async findMany<T extends Prisma.DiscussionForumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumFindManyArgs>
  ): Promise<DiscussionForum[]> {
    return this.prisma.discussionForum.findMany(args);
  }
  async findOne<T extends Prisma.DiscussionForumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumFindUniqueArgs>
  ): Promise<DiscussionForum | null> {
    return this.prisma.discussionForum.findUnique(args);
  }
  async create<T extends Prisma.DiscussionForumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumCreateArgs>
  ): Promise<DiscussionForum> {
    return this.prisma.discussionForum.create<T>(args);
  }
  async update<T extends Prisma.DiscussionForumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumUpdateArgs>
  ): Promise<DiscussionForum> {
    return this.prisma.discussionForum.update<T>(args);
  }
  async delete<T extends Prisma.DiscussionForumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscussionForumDeleteArgs>
  ): Promise<DiscussionForum> {
    return this.prisma.discussionForum.delete(args);
  }

  async findDiscussionThreads(
    parentId: string,
    args: Prisma.DiscussionThreadFindManyArgs
  ): Promise<DiscussionThread[]> {
    return this.prisma.discussionForum
      .findUnique({
        where: { id: parentId },
      })
      .discussionThreads(args);
  }

  async findGroup(
    parentId: string,
    args: Prisma.GroupFindManyArgs
  ): Promise<Group[]> {
    return this.prisma.discussionForum
      .findUnique({
        where: { id: parentId },
      })
      .group(args);
  }
}