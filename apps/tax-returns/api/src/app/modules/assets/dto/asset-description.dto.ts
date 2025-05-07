import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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
