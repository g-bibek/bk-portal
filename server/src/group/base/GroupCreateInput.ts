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
import { IsString, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumGroupGroupType } from "./EnumGroupGroupType";
import { UserCreateNestedManyWithoutGroupsInput } from "./UserCreateNestedManyWithoutGroupsInput";
import { Type } from "class-transformer";
@InputType()
class GroupCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  details?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumGroupGroupType,
  })
  @IsEnum(EnumGroupGroupType)
  @Field(() => EnumGroupGroupType)
  groupType!: "System" | "Default";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutGroupsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutGroupsInput;
}
export { GroupCreateInput };
