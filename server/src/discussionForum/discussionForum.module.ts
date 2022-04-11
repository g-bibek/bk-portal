import { Module } from "@nestjs/common";
import { DiscussionForumModuleBase } from "./base/discussionForum.module.base";
import { DiscussionForumService } from "./discussionForum.service";
import { DiscussionForumController } from "./discussionForum.controller";
import { DiscussionForumResolver } from "./discussionForum.resolver";

@Module({
  imports: [DiscussionForumModuleBase],
  controllers: [DiscussionForumController],
  providers: [DiscussionForumService, DiscussionForumResolver],
  exports: [DiscussionForumService],
})
export class DiscussionForumModule {}
