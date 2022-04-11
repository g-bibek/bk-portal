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
import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EmpowermentCreateNestedManyWithoutUsersInput } from "./EmpowermentCreateNestedManyWithoutUsersInput";
import { EmpowermentHistoryCreateNestedManyWithoutUsersInput } from "./EmpowermentHistoryCreateNestedManyWithoutUsersInput";
import { GroupCreateNestedManyWithoutUsersInput } from "./GroupCreateNestedManyWithoutUsersInput";
import { MahakramaHistoryCreateNestedManyWithoutUsersInput } from "./MahakramaHistoryCreateNestedManyWithoutUsersInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  approvedEvents?: EventCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => EmpowermentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EmpowermentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EmpowermentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  authorizedEmpowerments?: EmpowermentCreateNestedManyWithoutUsersInput;

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
    type: () => EventCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  disapprovedEvents?: EventCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: () => EmpowermentHistoryCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EmpowermentHistoryCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EmpowermentHistoryCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  empowermentHistory?: EmpowermentHistoryCreateNestedManyWithoutUsersInput;

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
    type: () => GroupCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => GroupCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => GroupCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  group?: GroupCreateNestedManyWithoutUsersInput;

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
    type: () => MahakramaHistoryCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MahakramaHistoryCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MahakramaHistoryCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  mahakramaHistory?: MahakramaHistoryCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  signedUpEvents?: EventCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
