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
import { UserCreateNestedManyWithoutEventsInput } from "./UserCreateNestedManyWithoutEventsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumEventEventType } from "./EnumEventEventType";
import { ResourceCreateNestedManyWithoutEventsInput } from "./ResourceCreateNestedManyWithoutEventsInput";
@InputType()
class EventCreateInput {
  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  approvedUsers?: UserCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  disapprovedUsers?: UserCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: true,
    enum: EnumEventEventType,
  })
  @IsEnum(EnumEventEventType)
  @Field(() => EnumEventEventType)
  eventType!: "Sangha" | "Public";

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isDeleted!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isPublished!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ResourceCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => ResourceCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => ResourceCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  resources?: ResourceCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  signedUpUsers?: UserCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;
}
export { EventCreateInput };
