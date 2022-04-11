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
import { MahakramaWhereInput } from "./MahakramaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MahakramaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MahakramaWhereInput,
  })
  @ValidateNested()
  @Type(() => MahakramaWhereInput)
  @IsOptional()
  @Field(() => MahakramaWhereInput, {
    nullable: true,
  })
  every?: MahakramaWhereInput;

  @ApiProperty({
    required: false,
    type: () => MahakramaWhereInput,
  })
  @ValidateNested()
  @Type(() => MahakramaWhereInput)
  @IsOptional()
  @Field(() => MahakramaWhereInput, {
    nullable: true,
  })
  some?: MahakramaWhereInput;

  @ApiProperty({
    required: false,
    type: () => MahakramaWhereInput,
  })
  @ValidateNested()
  @Type(() => MahakramaWhereInput)
  @IsOptional()
  @Field(() => MahakramaWhereInput, {
    nullable: true,
  })
  none?: MahakramaWhereInput;
}
export { MahakramaListRelationFilter };