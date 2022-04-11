/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Event } from "../../event/base/Event";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { Empowerment } from "../../empowerment/base/Empowerment";
import { EmpowermentHistory } from "../../empowermentHistory/base/EmpowermentHistory";
import { Group } from "../../group/base/Group";
import { MahakramaHistory } from "../../mahakramaHistory/base/MahakramaHistory";
@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [Event],
  })
  @ValidateNested()
  @Type(() => Event)
  @IsOptional()
  approvedEvents?: Array<Event>;

  @ApiProperty({
    required: false,
    type: () => [Empowerment],
  })
  @ValidateNested()
  @Type(() => Empowerment)
  @IsOptional()
  authorizedEmpowerments?: Array<Empowerment>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  Avatar!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Event],
  })
  @ValidateNested()
  @Type(() => Event)
  @IsOptional()
  disapprovedEvents?: Array<Event>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: () => [EmpowermentHistory],
  })
  @ValidateNested()
  @Type(() => EmpowermentHistory)
  @IsOptional()
  empowermentHistory?: Array<EmpowermentHistory>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Group],
  })
  @ValidateNested()
  @Type(() => Group)
  @IsOptional()
  group?: Array<Group>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [MahakramaHistory],
  })
  @ValidateNested()
  @Type(() => MahakramaHistory)
  @IsOptional()
  mahakramaHistory?: Array<MahakramaHistory>;

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
    type: () => [Event],
  })
  @ValidateNested()
  @Type(() => Event)
  @IsOptional()
  signedUpEvents?: Array<Event>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { User };