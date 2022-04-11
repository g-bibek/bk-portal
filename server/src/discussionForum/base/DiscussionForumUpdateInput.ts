/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiscussionThreadUpdateManyWithoutDiscussionForumsInput } from "./DiscussionThreadUpdateManyWithoutDiscussionForumsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { GroupUpdateManyWithoutDiscussionForumsInput } from "./GroupUpdateManyWithoutDiscussionForumsInput";
@InputType()
class DiscussionForumUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DiscussionThreadUpdateManyWithoutDiscussionForumsInput,
  })
  @ValidateNested()
  @Type(() => DiscussionThreadUpdateManyWithoutDiscussionForumsInput)
  @IsOptional()
  @Field(() => DiscussionThreadUpdateManyWithoutDiscussionForumsInput, {
    nullable: true,
  })
  discussionThreads?: DiscussionThreadUpdateManyWithoutDiscussionForumsInput;

  @ApiProperty({
    required: false,
    type: () => GroupUpdateManyWithoutDiscussionForumsInput,
  })
  @ValidateNested()
  @Type(() => GroupUpdateManyWithoutDiscussionForumsInput)
  @IsOptional()
  @Field(() => GroupUpdateManyWithoutDiscussionForumsInput, {
    nullable: true,
  })
  group?: GroupUpdateManyWithoutDiscussionForumsInput;
}
export { DiscussionForumUpdateInput };
