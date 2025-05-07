import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum DebtDescriptionCurrency {
  ISK = 'ISK',
}

@InputType()
export class DebtDescriptionItemDto {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  declare title: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  declare title_value?: string;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  declare index: number;

  @Field(() => String, { nullable: true })
  @IsEnum(DebtDescriptionCurrency)
  @IsOptional()
  declare currency?: DebtDescriptionCurrency;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  declare value?: number;
}

@InputType()
export class DebtDescriptionDto {
  @Field(() => [DebtDescriptionItemDto])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DebtDescriptionItemDto)
  declare items: DebtDescriptionItemDto[];
} 