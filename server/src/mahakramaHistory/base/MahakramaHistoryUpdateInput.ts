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
import {
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { MahakramaUpdateManyWithoutMahakramaHistoriesInput } from "./MahakramaUpdateManyWithoutMahakramaHistoriesInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class MahakramaHistoryUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDeleted?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => MahakramaUpdateManyWithoutMahakramaHistoriesInput,
  })
  @ValidateNested()
  @Type(() => MahakramaUpdateManyWithoutMahakramaHistoriesInput)
  @IsOptional()
  @Field(() => MahakramaUpdateManyWithoutMahakramaHistoriesInput, {
    nullable: true,
  })
  mahakrama?: MahakramaUpdateManyWithoutMahakramaHistoriesInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isMarkedCompleteByInstructor?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isMarkedCompleteByStudent?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  student?: UserWhereUniqueInput;
}
export { MahakramaHistoryUpdateInput };
