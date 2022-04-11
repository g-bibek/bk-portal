import { Module } from "@nestjs/common";
import { DiscussionThreadModuleBase } from "./base/discussionThread.module.base";
import { DiscussionThreadService } from "./discussionThread.service";
import { DiscussionThreadController } from "./discussionThread.controller";
import { DiscussionThreadResolver } from "./discussionThread.resolver";

@Module({
  imports: [DiscussionThreadModuleBase],
  controllers: [DiscussionThreadController],
  providers: [DiscussionThreadService, DiscussionThreadResolver],
  exports: [DiscussionThreadService],
})
export class DiscussionThreadModule {}
