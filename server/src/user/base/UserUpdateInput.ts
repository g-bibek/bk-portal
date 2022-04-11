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
import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EmpowermentUpdateManyWithoutUsersInput } from "./EmpowermentUpdateManyWithoutUsersInput";
import { EmpowermentHistoryUpdateManyWithoutUsersInput } from "./EmpowermentHistoryUpdateManyWithoutUsersInput";
import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";
import { MahakramaHistoryUpdateManyWithoutUsersInput } from "./MahakramaHistoryUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EventUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  approvedEvents?: EventUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => EmpowermentUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EmpowermentUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EmpowermentUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  authorizedEmpowerments?: EmpowermentUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  Avatar?: string | null;

  @ApiProperty({
    required: false,
    type: () => EventUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  disapprovedEvents?: EventUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: () => EmpowermentHistoryUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EmpowermentHistoryUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EmpowermentHistoryUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  empowermentHistory?: EmpowermentHistoryUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => GroupUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => GroupUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => GroupUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  group?: GroupUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => MahakramaHistoryUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MahakramaHistoryUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MahakramaHistoryUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  mahakramaHistory?: MahakramaHistoryUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: () => EventUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  signedUpEvents?: EventUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };