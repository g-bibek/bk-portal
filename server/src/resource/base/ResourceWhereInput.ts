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
import { ResourceListRelationFilter } from "./ResourceListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EmpowermentListRelationFilter } from "../../empowerment/base/EmpowermentListRelationFilter";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { GroupListRelationFilter } from "../../group/base/GroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MahakramaListRelationFilter } from "../../mahakrama/base/MahakramaListRelationFilter";
import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";
import { EnumResourceResourceType } from "./EnumResourceResourceType";
@InputType()
class ResourceWhereInput {
  @ApiProperty({
    required: false,
    type: () => ResourceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResourceListRelationFilter)
  @IsOptional()
  @Field(() => ResourceListRelationFilter, {
    nullable: true,
  })
  childResources?: ResourceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => EmpowermentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmpowermentListRelationFilter)
  @IsOptional()
  @Field(() => EmpowermentListRelationFilter, {
    nullable: true,
  })
  empowerments?: EmpowermentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @IsOptional()
  @Field(() => EventWhereUniqueInput, {
    nullable: true,
  })
  event?: EventWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => GroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GroupListRelationFilter)
  @IsOptional()
  @Field(() => GroupListRelationFilter, {
    nullable: true,
  })
  groups?: GroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MahakramaListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MahakramaListRelationFilter)
  @IsOptional()
  @Field(() => MahakramaListRelationFilter, {
    nullable: true,
  })
  mahakramas?: MahakramaListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ResourceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResourceWhereUniqueInput)
  @IsOptional()
  @Field(() => ResourceWhereUniqueInput, {
    nullable: true,
  })
  parentResource?: ResourceWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumResourceResourceType,
  })
  @IsEnum(EnumResourceResourceType)
  @IsOptional()
  @Field(() => EnumResourceResourceType, {
    nullable: true,
  })
  resourceType?: "Image" | "Youtube" | "Document" | "Link" | "Folder";
}
export { ResourceWhereInput };