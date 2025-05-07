import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum AssetDescriptionCurrency {
  ISK = 'ISK',
}

@InputType()
export class AssetDescriptionItemDto {
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
  @IsEnum(AssetDescriptionCurrency)
  @IsOptional()
  declare currency?: AssetDescriptionCurrency;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  declare value?: number;
}

@InputType()
export class AssetDescriptionDto {
  @Field(() => [AssetDescriptionItemDto])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AssetDescriptionItemDto)
  declare items: AssetDescriptionItemDto[];
}
