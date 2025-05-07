import { Field, Float, InputType } from '@nestjs/graphql';
import { RevenueCurrency, RevenueType } from '../revenue.model';

@InputType()
export class CreateNestedRevenueInput {
  @Field(() => RevenueType)
  declare type: RevenueType;

  @Field(() => String, { nullable: true })
  declare description?: string;

  @Field(() => RevenueCurrency)
  declare currency: RevenueCurrency;

  @Field(() => Float)
  declare value: number;
}
